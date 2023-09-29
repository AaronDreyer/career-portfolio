
import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import profilePic from '../components/17-Aaron Dreyer.png';

export default function Header() {
  const navbarStyle = {
    height: '100px',
    position: 'fixed',
    top: '0',
    width: '100%',
    zIndex: '100',
  };


  const imageStyle = {
    width: '50px',
    height: '50px',
    marginRight: '10px',
  };

  const [activeLink, setActiveLink] = useState(null);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setActiveLink(sectionId);
  };

  const navbarToggle = document.querySelector('.navbar-toggler');
    if (navbarToggle) {
      navbarToggle.click();
    }
  

  return (
    <Navbar bg="white" data-bs-theme="light" style={navbarStyle} expand="md">
      <Container fluid>
        <Navbar.Brand className="font-weight-bold m-4" href="#home">
          <Image style={imageStyle} src={profilePic} alt="Profilepic" roundedCircle />
          Aaron Dreyer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  
        <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="custom-navbar" variant="underline" defaultActiveKey="/home">
          <Nav.Link
            className={`m-4 text-dark ${activeLink === 'home' ? 'active' : ''}`}
            href="#home"
            onClick={(event) => scrollToSection(event, 'home')}
          >
            Home
          </Nav.Link>
          <Nav.Link
            className={`m-4 text-dark ${activeLink === 'about' ? 'active' : ''}`}
            href="#about"
            onClick={(event) => scrollToSection(event, 'about')}
          >
            About
          </Nav.Link>
          <Nav.Link
            className={`m-4 text-dark ${activeLink === 'skills' ? 'active' : ''}`}
            href="#skills"
            onClick={(event) => scrollToSection(event, 'skills')}
          >
            Skills
          </Nav.Link>
        
          <NavDropdown title="Projects" id="basic-nav-dropdown" className="m-4 text-dark">
              <NavDropdown.Item className={`text-dark custom-active ${activeLink === 'projects' }`}
            href="#projects"
            onClick={(event) => scrollToSection(event, 'projects')}>
                Projects
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item className={`text-dark custom-active ${activeLink === 'memegenerator' }`}
            href="#memegenerator"
            onClick={(event) => scrollToSection(event, 'memegenerator')}>Meme Generator</NavDropdown.Item>

              <NavDropdown.Item className={`text-dark custom-active ${activeLink === 'cloudcalorie' }`}
            href="#cloudcalorie"
            onClick={(event) => scrollToSection(event, 'cloudcalorie')}>CloudCalorie</NavDropdown.Item>

              <NavDropdown.Item className={`text-dark custom-active ${activeLink === 'codecollab' }`}
            href="#codecollab"
            onClick={(event) => scrollToSection(event, 'codecollab')}>CodeCollab</NavDropdown.Item>

              <NavDropdown.Item className={`text-dark custom-active ${activeLink === 'codequiz' }`}
            href="#codequiz"
            onClick={(event) => scrollToSection(event, 'codequiz')}>Mega Code Quiz</NavDropdown.Item>

              <NavDropdown.Item className={`text-dark custom-active ${activeLink === 'workday' }`}
            href="#workday"
            onClick={(event) => scrollToSection(event, 'workday')}>Work Day Scheduler</NavDropdown.Item>

              <NavDropdown.Item className={`text-dark custom-active ${activeLink === 'pwa' }`}
            href="#pwa"
            onClick={(event) => scrollToSection(event, 'pwa')}>PWA Text Editor</NavDropdown.Item>

              <NavDropdown.Item className={`text-dark custom-active ${activeLink === 'teamgenerator' }`}
            href="#teamgenerator"
            onClick={(event) => scrollToSection(event, 'teamgenerator')}>Team Generator</NavDropdown.Item>

            </NavDropdown>

          <Nav.Link
            className={`m-4 text-dark ${activeLink === 'contact' ? 'active' : ''}`}
            href="#contact"
            onClick={(event) => scrollToSection(event, 'contact')}
          >
            Contact
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}
