/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function About () {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={6}>
                        <img src="../Images/17-Aaron Dreyer.png" alt="Profilepic" />
                    </Col>
                    <Col xs={6}>
                        <p>Description</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}