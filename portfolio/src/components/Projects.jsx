/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import placeholder from '../components/placeholderimage.png';

export default function Projects() {

  const Projects = {
    paddingTop: '100px',
  }

  return (
    <Container fluid className="mt-3 mb-3" id="projects" style={Projects}>
      <h1 className="mb-5">Projects</h1>
      <Row className="mb-3">
        <Col>
        <img style={{ height: '300px' }} src={placeholder} alt="placeholder" />
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <div>
          <h2>Project 1</h2>
          <p>Short Description</p>
          <Button>Click Me</Button>
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="d-flex align-items-center justify-content-center">
          <div>
          <h2>Project 1</h2>
          <p>Short Description</p>
          <Button>Click Me</Button>
          </div>
        </Col>
        <Col>
        <img style={{ height: '300px' }} src={placeholder} alt="placeholder" />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
        <img style={{ height: '300px' }} src={placeholder} alt="placeholder" />
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <div>
          <h2>Project 1</h2>
          <p>Short Description</p>
          <Button>Click Me</Button>
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="d-flex align-items-center justify-content-center">
          <div>
          <h2>Project 1</h2>
          <p>Short Description</p>
          <Button>Click Me</Button>
          </div>
        </Col>
        <Col>
        <img style={{ height: '300px' }} src={placeholder} alt="placeholder" />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
        <img style={{ height: '300px' }} src={placeholder} alt="placeholder" />
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <div>
          <h2>Project 1</h2>
          <p>Short Description</p>
          <Button>Click Me</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
