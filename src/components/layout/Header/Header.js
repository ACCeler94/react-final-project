import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {

  return (
    <header>
      <Navbar className='rounded-1 mt-1' bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Waiter.app</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
};

export default Header;