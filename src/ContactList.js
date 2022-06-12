import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

function ContactList(props) {
  let [searchParams, setSearchParams] = useSearchParams()

  function contacts() {
    if (props.contacts === null) {
      return
    }

    return props.contacts.map((contact) => (
      <ListGroup.Item key={contact.id} variant={variantFor(contact.name)}>
        <Link to={`/contacts/${contact.id}`} key={contact.id}>
          {contact.name}
        </Link>
      </ListGroup.Item>
    ))
  }

  function handleSearch(event) {
    let value = event.target.value
    let params = value ? { query: value } : {}
    setSearchParams(params)
  }

  function variantFor(name) {
    let query = searchParams.get('query')
    return name.search(query) >= 0 ? 'primary' : ''
  }

  return (
    <>
      <h1>Contacts</h1>
      <Form className="w-50">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          value={searchParams.get('query') || ''}
          onChange={handleSearch}
        />
      </Form>
      <Stack direction="horizontal" gap={3}>
        <ListGroup className="w-75">{contacts()}</ListGroup>
        <Outlet />
      </Stack>
    </>
  )
}

export default ContactList
