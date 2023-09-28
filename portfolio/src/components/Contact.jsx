import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Contact() {

  const ContactMe = {
    paddingTop: '150px',
    paddingBottom: '200px',
  }

  const Space = {
    backgroundColor: '#32502B',
    height: '4px',
    border: 'solid #32502B',
    fontSize: '18px',
  };


  return (
    <Container id="contact" style={ContactMe} className="w-75 mx-auto">
      <h1>Contact Me</h1>
      <Row>
          <Col>
            <hr style={Space} className="mx-auto w-25" />
          </Col>
      </Row>
      <Row>
      <Col>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="name" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control type="message" placeholder="Message" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Col>
    </Row>
    </Container>
  );
}
