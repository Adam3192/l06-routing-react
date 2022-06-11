import React from 'react'
import AboutUs from './AboutUs'
import Home from './Home'
import Welcome from './Welcome'
import Contact from './Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactList from './ContactList'
import useContactDataSource from './useContactDataSource'

function App() {
  let [contacts, deleteContact] = useContactDataSource()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Welcome />} />
          <Route path="contacts" element={<ContactList contacts={contacts} />}>
            <Route index element={<p>Select a contact for more details</p>} />
            <Route
              path=":contactId"
              element={
                <Contact
                  contacts={contacts}
                  onDeleteContact={(id) => deleteContact(id)}
                />
              }
            />
          </Route>
          <Route path="about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
