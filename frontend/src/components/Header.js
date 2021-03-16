import React from 'react'
import {Container, Navbar, Nav} from "react-bootstrap"

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">TECH <strong>REIGN</strong></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
              <Nav.Link href="/login"> <i className="fas fa-user-alt"></i> Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </header>
  )
}

export default Header
