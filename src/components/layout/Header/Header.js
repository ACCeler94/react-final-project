import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header>
      <Navbar className='rounded-1 mt-1' bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="nav-link" >Waiter.app</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/" className="nav-link" >Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
};

export default Header;