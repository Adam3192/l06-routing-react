import { faker } from '@faker-js/faker'
import { useState } from 'react'

function useContactDataSource() {
  let [contacts, setContacts] = useState(() => {
    return generateContacts()
  })

  function generateContacts() {
    faker.seed(1234567890)
    let contacts = []
    for (let i = 0; i < 10; i++) {
      let firstName = faker.name.firstName()
      let lastName = faker.name.lastName()
      contacts.push({
        id: faker.datatype.uuid(),
        name: `${firstName} ${lastName}`,
        email: faker.internet.exampleEmail(firstName, lastName),
        phone: faker.phone.phoneNumber(),
        avatar: require(`../node_modules/fake-avatars/avatars/${i}.png`),
      })
    }
    return contacts
  }

  function deleteContact(id) {
    setContacts((currentState) => {
      return currentState.filter((contact) => contact.id !== id)
    })
  }

  return [contacts, deleteContact]
}

export default useContactDataSource
