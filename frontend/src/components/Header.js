import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar variant='dark' bg='dark' >
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header