// import React from 'react';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
// import profilePic from '../components/17-Aaron Dreyer.png';
// // import NavDropdown from 'react-bootstrap/NavDropdown';


// export default function Header () {
//   const navbarStyle = {
//     height: '80px',
//     position: 'fixed',  
//     top: '0',           
//     width: '100%',      
//     zIndex: '100', 
//   };

//   const imageStyle = {
//     width: '50px', 
//     height: '50px', 
//     marginRight: '10px'
//   };


//     return (
//       <Navbar bg="white" data-bs-theme="light" style={navbarStyle}>
//           <Container fluid>
//           <Navbar.Brand className="m-4" href="#home">
//             <Image style={imageStyle} src={profilePic} alt="Profilepic" roundedCircle />
//             Aaron Dreyer
//           </Navbar.Brand>
//           <Nav variant="underline" defaultActiveKey="/home">
//             <Nav.Link className="m-4 text-dark" href="#home">Home</Nav.Link>
//             <Nav.Link className="m-4 text-dark" href="#about">About</Nav.Link>
//             <Nav.Link className="m-4 text-dark" href="#projects">Projects</Nav.Link>
//             <Nav.Link className="m-4 text-dark" href="#contact">Contact Me</Nav.Link>
//           </Nav>
//           </Container>
//       </Navbar>
//     );
// }

import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import profilePic from '../components/17-Aaron Dreyer.png';

export default function Header() {
  const navbarStyle = {
    height: '80px',
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

  return (
    <Navbar bg="white" data-bs-theme="light" style={navbarStyle}>
      <Container fluid>
        <Navbar.Brand className="m-4" href="#home">
          <Image style={imageStyle} src={profilePic} alt="Profilepic" roundedCircle />
          Aaron Dreyer
        </Navbar.Brand>
        <Nav variant="underline" defaultActiveKey="/home">
          <Nav.Link
            className={`m-4 text-dark ${activeLink === 'home' ? 'active' : ''}`}
            href="#home"
            onClick={(event) => scrollToSection(event, 'home')}
          >
            Home
          </Nav.Link>
          <Nav.Link
            className={`m-4 text-dark ${activeLink === 'projects' ? 'active' : ''}`}
            href="#projects"
            onClick={(event) => scrollToSection(event, 'projects')}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            className={`m-4 text-dark ${activeLink === 'contact' ? 'active' : ''}`}
            href="#contact"
            onClick={(event) => scrollToSection(event, 'contact')}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
