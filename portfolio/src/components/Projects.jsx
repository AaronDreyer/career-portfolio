/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import project1example from './images/Modal.html.png';
import project2example from './images/localhost_3001_homepage (1).png';
import project3example from './images/LandingPageScreenshot.png';
import project4example from './images/Start-Page.png';
import project5example from './images/_Users_aaronottaway_Desktop_Module-5-Challenge_your-daily-schedule_index.html.png';
import project6example from './images/radiant-mountain-72051.herokuapp.com_ (2).png';
import project7example from './images/Module_10_Webpage.html.png';

export default function Projects() {

  const Projects = {
    paddingTop: '100px',
  }

  const Space = {
    backgroundColor: '#32502B',
    height: '4px',
    border: 'solid #32502B',
    fontSize: '18px',
    marginTop: '10px',
    marginBottom: '30px',
  };

  const Images = {
    width: '400px',
    height: 'auto',
  }

  const Buttons = {
    backgroundColor: '#4B663B',
    border: 'none',
    margin: '3px',
  }

  return (
    <Container fluid className="mt-3 mb-3" id="projects" style={Projects}>
      <h1>Projects</h1>
      <Row>
          <Col>
            <hr style={Space} className="mx-auto w-25" />
          </Col>
      </Row>

      <Row id="memegenerator" className='pt-3 pb-3'>
        <Col xs={6}>
        <img style={Images} src={project1example} alt="placeholder" />
        </Col>
        <Col xs={6} className="d-flex align-items-center justify-content-center">
          <div className="w-50">
          <h2>Meme Generator</h2>
          <p>"The curious cat explored the lush garden, its whiskers twitching with every new scent it discovered."</p>
          <Button style={Buttons}>Repository</Button>
          <Button style={Buttons}>Live Page</Button>
          </div>
        </Col>
      </Row>

      <Row>
          <Col>
            <hr style={Space} className="mx-auto w-25" />
          </Col>
      </Row>

      <Row id="cloudcalorie" className='pt-3 pb-3'>
      <Col xs={6} className="d-flex align-items-center justify-content-center">
          <div className="w-50">
          <h2>CloudCalorie</h2>
          <p>"The curious cat explored the lush garden, its whiskers twitching with every new scent it discovered."</p>
          <Button style={Buttons}>Repository</Button>
          <Button style={Buttons}>Live Page</Button>
          </div>
        </Col>
        <Col xs={6}>
        <img style={Images} src={project2example} alt="placeholder" />
        </Col>
      </Row>

      <Row>
          <Col>
            <hr style={Space} className="mx-auto w-25" />
          </Col>
      </Row>

      <Row id="codecollab" className='pt-3 pb-3'>
      <Col xs={6}>
        <img style={Images} src={project3example} alt="placeholder" />
        </Col>
        <Col xs={6} className="d-flex align-items-center justify-content-center">
          <div className="w-50">
          <h2>CodeCollab</h2>
          <p>"The curious cat explored the lush garden, its whiskers twitching with every new scent it discovered."</p>
          <Button style={Buttons}>Repository</Button>
          <Button style={Buttons}>Live Page</Button>
          </div>
        </Col>
      </Row>

      <Row>
          <Col>
            <hr style={Space} className="mx-auto w-25" />
          </Col>
      </Row>

      <Row id="codequiz" className='pt-3 pb-3'>
      <Col xs={6} className="d-flex align-items-center justify-content-center">
          <div className="w-50">
          <h2>Mega Code Quiz</h2>
          <p>"The curious cat explored the lush garden, its whiskers twitching with every new scent it discovered."</p>
          <Button style={Buttons}>Repository</Button>
          <Button style={Buttons}>Live Page</Button>
          </div>
        </Col>
        <Col xs={6}>
        <img style={Images} src={project4example} alt="placeholder" />
        </Col>
      </Row>

      <Row>
          <Col>
            <hr style={Space} className="mx-auto w-25" />
          </Col>
      </Row>

      <Row id="workday" className='pt-3 pb-3'>
      <Col xs={6}>
        <img style={Images} src={project5example} alt="placeholder" />
        </Col>
        <Col xs={6} className="d-flex align-items-center justify-content-center">
          <div className="w-50">
          <h2>Work Day Scheduler</h2>
          <p>"The curious cat explored the lush garden, its whiskers twitching with every new scent it discovered."</p>
          <Button style={Buttons}>Repository</Button>
          <Button style={Buttons}>Live Page</Button>
          </div>
        </Col>
      </Row>

      <Row>
          <Col>
            <hr style={Space} className="mx-auto w-25" />
          </Col>
      </Row>

      <Row id="pwa" className='pt-3 pb-3'>
      <Col xs={6} className="d-flex align-items-center justify-content-center">
          <div className="w-50">
          <h2>PWA Text Editor</h2>
          <p>"The curious cat explored the lush garden, its whiskers twitching with every new scent it discovered."</p>
          <Button style={Buttons}>Repository</Button>
          <Button style={Buttons}>Live Page</Button>
          </div>
        </Col>
        <Col xs={6}>
        <img style={Images} src={project6example} alt="placeholder" />
        </Col>
      </Row>

      <Row>
          <Col>
            <hr style={Space} className="mx-auto w-25" />
          </Col>
      </Row>

      <Row id="teamgenerator" className='pt-3 pb-3'>
      <Col xs={6}>
        <img style={Images} src={project7example} alt="placeholder" />
        </Col>
        <Col xs={6} className="d-flex align-items-center justify-content-center">
          <div className="w-50">
          <h2>Team Generator</h2>
          <p>"The curious cat explored the lush garden, its whiskers twitching with every new scent it discovered."</p>
          <Button style={Buttons}>Repository</Button>
          <Button style={Buttons}>Live Page</Button>
          </div>
        </Col>
      </Row>

    </Container>
  );
}
