import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

const Navcontact = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Contact List</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to='/'>Home</Nav.Link>
        <Nav.Link as={Link} to='/contacts' >Contact</Nav.Link>
        <Nav.Link as={Link} to='/addContact'>Adding</Nav.Link>
        <Nav.Link as={Link} to='/update/:id'>update</Nav.Link>

      </Nav>
    </Container>
  </Navbar>
  </div>
  )
}

export default Navcontact