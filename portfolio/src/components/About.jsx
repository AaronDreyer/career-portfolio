/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import profilePic from '../components/17-Aaron Dreyer.png';



export default function About () {

    const [show, setShow] = useState(false);

    useEffect(() => {
      // When the modal is opened, add the no-scroll class to the body
      if (show) {
        document.body.classList.add('no-scroll');
      } else {
        // When the modal is closed, remove the no-scroll class from the body
        document.body.classList.remove('no-scroll');
      }
    }, [show]);


    const AboutMe = {
        paddingTop: '120px',
        paddingBottom: '130px',
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
        backgroundColor: 'white',
        color: 'white',
        border: 'solid #FFF',
        fontSize: '18px',
      }

      const Buttons = {
        backgroundColor: '#5F8356',
        border: '1px solid #4A622C',
      }

      
      const Modals = {
        border: '1px solid #4A622C'
      }

    return (
            <Container fluid style={AboutMe} id="home">
                <h1 style={Title} className="text-white font-weight-bold"> Hey, My name is Aaron Dreyer </h1>
                <Row className="mt-5">
                    <Col xs={12}>
                        <Image className="shadow-lg" src={profilePic} alt="Profilepic"  rounded/>
                    </Col>
                    <hr style={Space} className="mx-auto w-25 my-3"/>
                    <Col xs={12}>
                        <h2 className="text-white" style={Quote}>Motivated college graduate looking for opportunities in Web Development!</h2>
                    </Col>
                    <Col className="mt-3">
                    <Button style={Buttons} className="mx-auto font-weight-bold shadow-lg button-hover-effect" variant="light" onClick={() => setShow(true)}
                    >
                        <h3 className="text-dark font-weight-bold">About Me!</h3>
                    </Button>

                    <Modal
                        style={Modals}
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title" centered>
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                            A little about me...
                            </Modal.Title>
                        </Modal.Header>
                            <Modal.Body>
                                <p>I am a passionate and dedicated junior web developer actively seeking new employment opportunities. With a strong foundation in front-end and back-end web development technologies, I bring creativity and problem-solving skills to every project. My goal is to contribute my knowledge and enthusiasm to a dynamic team, collaborate on exciting projects, and continue to grow and expand my skill set in the ever-evolving field of web development. I am eager to take on new challenges and make a meaningful impact in the world of web development.</p>
                            </Modal.Body>
                    </Modal>
                    </Col>
                    
                </Row>
                <div class="home-hero__mouse-scroll-cont">
                    <div class="mouse"></div>
                </div>
            </Container>
    )
}