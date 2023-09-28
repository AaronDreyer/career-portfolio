/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Github, Linkedin, Mailbox2, Steam } from 'react-bootstrap-icons';
import profilePic from '../components/17-Aaron Dreyer.png';

export default function About () {

    const Intro = {
        paddingTop: '120px',
        paddingBottom: '140px',
        backgroundColor: '#4B663B',
        position: 'relative',
      };

      const Title = {
        fontSize: '50px',
      }

      const Quote = {
        fontSize: '25px',
      }

      const Space = {
        height: '4px',
        border: 'solid #FFF',
        fontSize: '18px',
      }



    return (
            <Container fluid style={Intro} id="home">
                <h1 style={Title} className="text-white font-weight-bold"> Hey, My name is Aaron Dreyer </h1>
                <Row className="mt-5">
                    <Col xs={12}>
                        <Image className="shadow-lg" src={profilePic} alt="Profilepic"  rounded/>
                    </Col>
                    <hr style={Space} className="mx-auto w-25 my-3" />
                    <Col xs={12}>
                        <h2 className="text-white" style={Quote}>Motivated college graduate looking for opportunities in Web Development!</h2>
                    </Col>
                  </Row>
                  <Row className="mt-3 mx-2">
                    <Col xs={6} sm={3}>
                      <a href="https://github.com/AaronDreyer">
                      <Github size={40} className="text-white image-hover" />
                      </a>
                    </Col>
                    <Col xs={6} sm={3}>
                      <a href="https://www.linkedin.com/in/aarondreyer/">
                      <Linkedin size={40} className="text-white image-hover" />
                      </a>
                    </Col>
                    <Col xs={6} sm={3}>
                      <a href="mailto:aaronottaway@gmail.com">
                      <Mailbox2 size={40} className="text-white image-hover" />
                      </a>
                    </Col>
                    <Col xs={6} sm={3}>
                      <a href="https://steamcommunity.com/profiles/76561199486859938/">
                      <Steam size={40} className="text-white image-hover" />
                      </a>
                    </Col>
                </Row>
                <Row>
                  <Col>
                <div class="home-hero__mouse-scroll-cont">
                    <div class="mouse"></div>
                </div>
                </Col>
                </Row>
            </Container>
    )
}