import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About () {

    const About = {
        paddingTop: "100px",
    };

    const Paragraph = {
        lineHeight: "2",
    };

    const Space = {
        backgroundColor: '#32502B',
        height: '4px',
        border: 'solid #32502B',
        fontSize: '18px',
      };

    return (
        <Container id="about">
            <Row className="mb-3">
                <Col>
                <h1 style={About}>About Me</h1>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col>
                <hr style={Space} className="mx-auto w-25 my-1" />
                </Col>
            </Row>
            <Row>
                <Col>
                <p style={Paragraph}>I am a passionate web developer with a diverse background in creating dynamic and user-friendly websites. With several years of hands-on experience, I have honed my skills in front-end and back-end development, mastering languages and frameworks such as HTML, CSS, JavaScript, React, and Node.js. I am dedicated to crafting visually appealing and responsive web solutions, and my expertise includes building interactive web applications, optimizing website performance, and ensuring cross-browser compatibility. I am enthusiastic about staying current with industry trends and continually expanding my knowledge to deliver cutting-edge web experiences.</p>
                </Col>
            </Row>
        </Container>
    )
}