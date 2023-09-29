import React from 'react';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Contact() {

  const ContactMe = {
    paddingTop: '150px',
    paddingBottom: '100px',
  }

  const Space = {
    backgroundColor: '#32502B',
    height: '4px',
    border: 'solid #32502B',
    fontSize: '18px',
  };

  const inputStyle = {
    fontSize: '17px',
    height: '150px',   
  };

  const Buttons = {
    backgroundColor: '#4B663B',
    border: 'none',
    margin: '3px',
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


  emailjs.sendForm('service_0rjvgwb', 'template_da9h8kn', form.current, 'VtMXAlTH4RXVN3fa3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
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
    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control 
                type="name"
                name="user_name"
                placeholder="Enter name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
                type="email"
                name-="user_email"
                placeholder="Enter email"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control 
                type="subject"
                placeholder="Enter subject"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control 
                as="textarea"
                rows={4}
                name="message"
                placeholder="Message"
                style={inputStyle} />
      </Form.Group>
      <Button className="button-hover" style={Buttons} variant="primary" type="submit" value="Send">
        Submit
      </Button>
    </Form>
    </Col>
    </Row>
    </Container>
  );
}
