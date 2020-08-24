import React from 'react'
import {Container, Card, Button, CardDeck, Col, Row, Image} from 'react-bootstrap';

import profileImage from '../assets/propic.jpg';

export const About = () => (
  <Container style={{paddingTop: "10vh", height: "100%"}}>
  <Row>
    <Col style={{marginTop: "5vh"}}>
      <h1>About Me</h1>        
      <p>Hi, my name is <b>Brent Samuels</b>. 
      I graduated from The Massachusetts Institute of Technology (MIT) in 2020 with 
      my Bachelor of Science Degree in Computer Science and Engineering (Course 6-3). 
      During, my time at MIT I developed a passion for Human Computer Interactions (HCI) 
      and particularly full-stack web development.
      </p>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type 
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>


      <h1>About This Site</h1> 
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type 
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>

    </Col>
    <Col style={{marginTop: "5vh"}}>
      <img src={profileImage} className="profileImage" />
    </Col>
  </Row>
  <div className="divider"></div>
</Container>
)
