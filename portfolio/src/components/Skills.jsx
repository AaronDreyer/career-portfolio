import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import HTML from './images/html.png';
import CSS from './images/css.png';
import Javascript from './images/javascript.png';
import Node from './images/nodejs.png';
import MongoDB from './images/mongodb.png';
import SQL from './images/sql.png';
import ReactIcon from './images/react.png';

export default function Skills () {

    const Skilled = {
        paddingTop: '100px',
    };

    const Images = {
        width: '150px',
        height: 'auto',
    }

    const Space = {
        backgroundColor: '#32502B',
        height: '4px',
        border: 'solid #32502B',
        fontSize: '18px',
      };

    return (
        <Container id="skills">
            <h1 className="pb-1" style={Skilled}>Skills</h1>
            <Row className="mb-3">
                <Col>
                <hr style={Space} className="mx-auto w-25 my-3" />
                </Col>
            </Row>
            <Row className="d-flex align-items-center justify-content-center">
                <Col xs={4}>
                    <Image  alt="html" src={HTML} style={Images} className="image-hover"/>
                </Col>
                <Col xs={4}>
                    <Image  alt="css" src={CSS} style={Images} className="image-hover"/>
                </Col>
                <Col xs={4}>
                    <Image  alt="javascript" src={Javascript} style={Images} className="image-hover"/>
                </Col>
                </Row>
                <Row className="mt-5 d-flex align-items-center justify-content-center">
                <Col xs={3}>
                    <Image  alt="node" src={Node} style={Images} className="image-hover"/>
                </Col>
                <Col xs={3}>
                    <Image  alt="sql" src={SQL} style={Images} className="image-hover"/>
                </Col>
                <Col xs={3}>
                    <Image  alt="react" src={ReactIcon} style={Images} className="image-hover"/>
                </Col>
                <Col xs={3}>
                    <Image  alt="mongodb" src={MongoDB} style={Images} className="image-hover"/>
                </Col>
            </Row>
        </Container>
    )
}