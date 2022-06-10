import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet, NavLink } from 'react-router-dom'

function Home() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/contacts" className="nav-link">
              Contacts
            </NavLink>
            <NavLink to="/about-us" className="nav-link">
              About Us
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <Stack gap={3} className="col-md-10 mx-auto">
        <Outlet />
      </Stack>
    </>
  )
}

export default Home
