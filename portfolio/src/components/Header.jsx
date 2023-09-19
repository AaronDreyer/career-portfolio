import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Header () {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Navbar.Brand href="#home">Aaron Dreyer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
}