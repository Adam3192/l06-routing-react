import Card from 'react-bootstrap/Card'
import { useParams } from 'react-router-dom'

function Contact(props) {
  let params = useParams()
  let contact = props.contacts.find(
    (contact) => contact.id === params.contactId
  )
  let { id, name, email, phone, avatar } = contact

  return (
    <Card className="align-self-start w-25">
      <Card.Img variant="top" src={avatar} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
        <Card.Text>
          <strong>Phone:</strong> <span>{phone}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Contact
