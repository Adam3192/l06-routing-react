import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

function ContactList(props) {
  function contacts() {
    if (props.contacts === null) return
    return props.contacts.map((contact) => (
      <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>
    ))
  }

  return (
    <>
      <h1>Contacts</h1>
      <ListGroup className="w-75">{contacts()}</ListGroup>
    </>
  )
}

export default ContactList
