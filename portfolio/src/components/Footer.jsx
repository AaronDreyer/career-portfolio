import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Github } from 'react-bootstrap-icons';

export default function Footer () {

    const Footer = {
        backgroundColor: '#4B663B',
        padding: '25px',
      };

    return (
        <Container style={Footer} className="w-100" fluid>
            <Row>
                <Col xs={6}>
                    <h4 className="text-white">@ Aaron Dreyer - 2023</h4>
                </Col>
                <Col xs={6}>
                      <a href="https://github.com/AaronDreyer">
                      <Github size={40} className="text-white image-hover" />
                      </a>
                    </Col>
            </Row>
        </Container>
    )
}
