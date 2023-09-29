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
        <Col className="mt-5" xs={6}>
        <img style={Images} src={project1example} alt="placeholder" />
        </Col>
        <Col xs={6} className="d-flex align-items-center justify-content-center">
          <div className="w-75">
          <h2>Meme Generator</h2>
          <p>This project is a meme generator using two server-side APIs: a random meme image generator and a random funny advice text generator. We used both of the APIs to combine into a image/text meme generator that a user can save to local storage to retrieve at a later time.</p>
          <a href="https://github.com/cbarnes0/Meme-Generator" alt="memegenerator">
          <Button className="button-hover" style={Buttons}>Repository</Button>
          </a>
          <a href="https://cbarnes0.github.io/Meme-Generator/" alt="memegenerator">
          <Button className="button-hover" style={Buttons}>Live Page</Button>
          </a>
          </div>
        </Col>
      </Row>

      <Row id="cloudcalorie">
          <Col>
            <hr style={Space} className="mx-auto w-25" />
          </Col>
      </Row>

      <Row id="cloudcalorie" className='pt-3 pb-3'>
      <Col xs={6} className="d-flex align-items-center justify-content-center">
          <div className="w-50">
          <h2>CloudCalorie</h2>
          <p>This application allows you to easily track your daily calorie intake. CloudCalorie allows you to create a profile and track your daily calories and save your progress.</p>
          <a href="https://github.com/AaronDreyer/CloudCalorie" alt="cloudcalorie">
          <Button className="button-hover" style={Buttons}>Repository</Button>
          </a>
          <a href="https://cloudcalorie.herokuapp.com/login" alt="cloudcalorie">
          <Button className="button-hover" style={Buttons}>Live Page</Button>
          </a>
          </div>
        </Col>
        <Col xs={6}>
        <img style={Images} src={project2example} alt="placeholder" />
        </Col>
      </Row>

      <Row id="codecollab" className="pb-3">
          <Col>
            <hr style={Space} className="mx-auto w-25" />
          </Col>
      </Row>

      <Row className='pt-3 pb-3 mt-3'>
      <Col xs={6}>
        <img style={Images} src={project3example} alt="placeholder" />
        </Col>
        <Col xs={6} className="d-flex align-items-center justify-content-center">
          <div className="w-75">
          <h2>CodeCollab</h2>
          <p>This is a bootcamp continuation blog!
            Join our bootcamp blog. Connect with alumni, share resources. Create an account for curated coding content, industry insights. Inclusive community supports your journey. Discover advice, success stories, discuss trends. You can gain access to this blog by signing up and signing in.</p>
          <a href="https://github.com/blairrrrwho/codecollab" alt="codecollab">
          <Button className="button-hover" style={Buttons}>Repository</Button>
          </a>
          <a href="https://codecollab-for-developers.herokuapp.com/" alt="codecollab">
          <Button className="button-hover" style={Buttons}>Live Page</Button>
          </a>
          </div>
        </Col>
      </Row>

      <Row id="codequiz">
          <Col>
            <hr style={Space} className="mx-auto w-25" />
          </Col>
      </Row>

      <Row className='pt-3 pb-3'>
      <Col xs={6} className="mt-5 d-flex align-items-center justify-content-center">
          <div className="w-75">
          <h2>Mega Code Quiz</h2>
          <p>This is a quiz about coding using html, css, and javascript. The main portion of the javascript is centered around Web APIs and uses the DOM to create a functioning multiple choice quiz with a point system, time limit, and highscore log. The quiz must feature several questions that need to be answered in within a time limit. However any missed question will deduct a certain amount of time. The score in which you get will be the time left in the counter. This score must then be logged to the website and be viewed by the user.</p>
          <a href="https://github.com/AaronDreyer/mega-code-quiz" alt="megacodequiz">
          <Button className="button-hover" style={Buttons}>Repository</Button>
          </a>
          <a href="https://aarondreyer.github.io/mega-code-quiz/" alt="megacodequiz">
          <Button className="button-hover" style={Buttons}>Live Page</Button>
          </a>
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

      <Row id="workday" className='pt-3 pb-5'>
      <Col xs={6}>
        <img style={Images} src={project5example} alt="placeholder" />
        </Col>
        <Col xs={6} className="d-flex align-items-center justify-content-center">
          <div className="w-75">
          <h2>Work Day Scheduler</h2>
          <p>This is a workday scheduler that allows the user to see the current local time and type there schedule using time blocks based on a 9 hour day (9am - 5pm). These time blocks have a text area and save button so the user can type their schedule in based on the hour they are wanting to have it completed/reminded and save it to the browsers local storage.</p>
          <a href="https://github.com/AaronDreyer/your-daily-schedule" alt="workdayscheduler">
          <Button className="button-hover" style={Buttons}>Repository</Button>
          </a>
          <a href="https://aarondreyer.github.io/your-daily-schedule/" alt="workdayscheduler">
          <Button className="button-hover" style={Buttons}>Live Page</Button>
          </a>
          </div>
        </Col>
      </Row>

      <Row id="pwa">
          <Col>
            <hr style={Space} className="mx-auto w-25" />
          </Col>
      </Row>

      <Row className='pt-3 pb-3 mt-4'>
      <Col xs={6} className="d-flex align-items-center justify-content-center">
          <div className="w-75">
          <h2>PWA Text Editor</h2>
          <p>This is a challenge for the Georgia Tech Coding Bootcamp to use refactor starter code to produce a PWA application that presents itself as a text editor. This challenge demonstartes the ability to use PWAs to create an application and operate it without local connection.</p>
          <a href="https://github.com/AaronDreyer/pwa-text-editor" alt="pwatexteditor">
          <Button className="button-hover" style={Buttons}>Repository</Button>
          </a>
          </div>
        </Col>
        <Col xs={6}>
        <img style={Images} src={project6example} alt="placeholder" />
        </Col>
      </Row>

      <Row id="teamgenerator">
          <Col>
            <hr style={Space} className="mx-auto w-25" />
          </Col>
      </Row>

      <Row className='mt-5 pt-3 pb-3'>
      <Col xs={6}>
        <img style={Images} src={project7example} alt="placeholder" />
        </Col>
        <Col xs={6} className="d-flex align-items-center justify-content-center">
          <div className="w-75">
          <h2>Team Generator</h2>
          <p>This project is a webpage generator that creates individual employee cards. These cards display the employees name, role in the team, ID number, and email. Depending on what employee role that is chosen, there is other input fields to add to the card. Engineers get a github username, Managers get an office number, and Interns get there school displayed. This helps show who is in a team, what they specifically do, how to reach out to them, and details about them.</p>
          <a href="https://github.com/AaronDreyer/oop-team-generator#oop-team-generator" alt="teamgenerator">
          <Button className="button-hover" style={Buttons}>Repository</Button>
          </a>
          </div>
        </Col>
      </Row>

    </Container>
  );
}
