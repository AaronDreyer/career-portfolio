import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Github, Linkedin, Mailbox2, Steam } from 'react-bootstrap-icons';

export default function Footer () {

    const Footer = {
        backgroundColor: '#4B663B',
        padding: '30px',
      };

    return (
        <Container style={Footer} className="w-100" fluid>
            <Row>
                <Col xs={6} md={6} lg={6} className="d-flex justify-content-start align-items-center">
                <p className="text-white m-2">@ Aaron Dreyer - 2023</p>
                </Col>
                <Col xs={6} md={6} lg={6} className="d-flex justify-content-end align-items-center">
                    <a href="https://github.com/AaronDreyer">
                      <Github size={40} className="text-white image-hover mx-3" />
                    </a>
                    <a href="https://www.linkedin.com/in/aarondreyer/">
                      <Linkedin size={40} className="text-white image-hover mx-3" />
                      </a>
                      <a href="mailto:aaronottaway@gmail.com">
                      <Mailbox2 size={40} className="text-white image-hover mx-3" />
                      </a>
                      <a href="https://steamcommunity.com/profiles/76561199486859938/">
                      <Steam size={40} className="text-white image-hover mx-3" />
                      </a>
                </Col>
            </Row>
        </Container>
    )
}
