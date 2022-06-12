import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useParams, useNavigate } from 'react-router-dom'

function Contact(props) {
  let navigate = useNavigate()
  let params = useParams()
  let contact = props.contacts.find(contact => contact.id === params.contactId);
  
  if (contact ===  undefined) { 
    return <p>Contact Not Found.</p> 
  }
  
  let { id, name, email, phone, avatar } = contact

  function handleDeleteContact(id) {
    props.onDeleteContact(id)
    navigate('/contacts')
  }

  return (
    <Card className="align-self-start w-25">
      <Card.Img variant="top" src={avatar} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
        <Card.Text>
          <strong>Phone:</strong> <span>{phone}</span>
        </Card.Text>
        <Button variant="danger" onClick={handleDeleteContact.bind(this, id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Contact
