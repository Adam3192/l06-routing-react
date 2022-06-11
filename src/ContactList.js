import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from 'react-router-dom'

function ContactList(props) {
  function contacts() {
    if (props.contacts === null) return
    return props.contacts.map((contact) => (
      <ListGroup.Item key={contact.id}>
        <Link to={`/contacts/${contact.id}`} key={contact.id}>
          {contact.name}
        </Link>
      </ListGroup.Item>
    ))
  }

  return (
    <>
      <h1>Contacts</h1>
      <Stack direction="horizontal" gap={3}>
        <ListGroup className="w-75">{contacts()}</ListGroup>
        <Outlet />
      </Stack>
    </>
  )
}

export default ContactList
