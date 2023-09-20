/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profilePic from '../components/17-Aaron Dreyer.png';


export default function About () {
    return (
        <div>
            <Container fluid>
                <Row className="mt-3">
                    <Col xs={6}>
                        <img src={profilePic} alt="Profilepic" />
                    </Col>
                    <Col xs={6} className="d-flex align-items-center justify-content-center">
                        <p>Description</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}