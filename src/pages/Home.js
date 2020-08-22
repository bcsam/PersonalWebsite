import React, {Component} from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import {Container, Card, Button, CardDeck, Col, Row, Image} from 'react-bootstrap';
import './Home.css';
import WorkModal from '../components/WorkModal';

//assets
import homeBanner from '../assets/homePage.jpg';
import profileImage from '../assets/propic.jpg';

import yextLogo from '../assets/yext.png';
import facebookLogo from '../assets/facebook.png';
import vivintLogo from'../assets/vivint.jpg';
import bpLogo from'../assets/brainpower.png';

import haystackLogo from '../assets/haystack.png';
import questLogo from '../assets/quest.png';
import mvlLogo from '../assets/mvl.jpg';
import rlLogo from '../assets/rl.jpg';



// const Styles = styled.div`
//   .overlay {
//     background-color: #000;
//     opacity: 0.5;
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//   }

//   .homeDisplayText{
//     position: absolute;
//     color: #ffffff
//     z-index: 1;
//     left: 10vw;
//     top: 30vh;
//   }

//   .homeImage {
//     height: calc(100vh - 56px);
//     width: 100%;
//     object-fit: cover;
//     z-index: -2;
//   }

//   .profileImage {
//     width: 30vw;
//     height: 30vw;
//     object-fit: cover;
//     border-radius: 50%;
//   }

//   .divider {
//     height = 5px;
//     background-color: lightwhitesmoke;
//     width = 100%;
//   }

//   .flexbox {
//     width: 100%;
//     text-align: center;
//     margin-bottom: 7vh;
//   }

//   .card:onhover {

//   }
// `;

export default class Home extends Component {
  constructor(props){
    super(props);
    this.workExperience = {
      YEXT: 1,
      FACEBOOK: 2,
      VIVINT: 3,
      BRAINPOWER: 4,
    }


    this.state = {
      showWorkModal: true,
      // workModalInfo: {
        company: "",
        position: "",
        date: "",
        location: "",
        description: "",
      // }
    }
  }



  openWorkModal(workExperience) {
    console.log("In Open Work Modal", workExperience);
    this.setWorkInfo(workExperience)
    console.log("Company:", this.state.company);
    this.setState({
      showWorkModal: true,
    })
  }

  render() {
    return (
      <>
        {/* Top Display */}
        <div style={{ marginTop: '56px'}} >
          <div className="homeDisplayText">
            <h1 style={{fontSize: '5vw' }}>Brent Samuels</h1>
            <h3 style={{fontSize: '2vw' }}>Software Engineer, Web Developer</h3>
            
          </div>
          <div className="overlay"></div>
          <img src={homeBanner} className="homeImage" />
        </div>


        {/* About Me */}
        <Container style={{paddingTop: "10vh", height: "80vh"}}>
          <Row>
            <Col style={{marginTop: "5vh"}}>
              <h1>About Me</h1>        
              <p>Hi, my name is <b>Brent Samuels</b>. 
              I graduated from The Massachusetts Institute of Technology (MIT) in 2020 with 
              my Bachelor of Science Degree in Computer Science and Engineering (Course 6-3). 
              During, my time at MIT I developed a passion for HCI and particularly
              full-stack web development.
              </p>

                <Button variant="outline-dark" style={{marginRight: "1vw"}} href="../assets/resume.pdf">
                  Download Resume
                  </Button>

                  {/* href="mailto:gklitt@gmail.com" */}
                <Button variant="outline-dark" >Email Me</Button>
            </Col>
            <Col>
              <img src={profileImage} className="profileImage" />
            </Col>
          </Row>


          <div className="divider"></div>
        </Container>


        {/* Work Experience */}
        <WorkModal 
          // company={"Yext"}
          // position={"Sofware Engineering Intern"}
          // date={"June-August 2020"}
          // location={"New York, New York"}
          // description={["Point #1", "Point #2", "Point #3"]}

          show={this.state.showWorkModal}
          onHide={() => this.setState({showWorkModal: false})}
          company={this.state.company}
          position={this.state.position}
          date={this.state.date}
          location={this.state.location}
          description={this.state.description}          
         />


        <div className="workExperienceContainer" style={{backgroundColor: "whitesmoke", height: "90vh"}}>
          <Container style={{marginTop: "10vh", padding: "10vh 0"}}>
            <h1 className="flexbox">Work Experience</h1>
            <CardDeck>

            <Card className="workCard" onClick={() => this.openWorkModal(this.workExperience.YEXT)}>
              <Card.Img variant="top" src={yextLogo} />
              <Card.Body>

                <Card.Title>Yext SWE</Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text> */}
              </Card.Body>
            </Card>

            <Card className="workCard" onClick={() => this.openWorkModal(this.workExperience.FACEBOOK)}>
              <Card.Img variant="top" src={facebookLogo} style={{boxShadow: "0 1px lightgray"}}/>
              <Card.Body>
                <Card.Title>Facebook SWE</Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text> */}
              </Card.Body>
            </Card>

            <Card className="workCard" onClick={() => this.openWorkModal(this.workExperience.VIVINT)}>
              <Card.Img variant="top" src={vivintLogo} />
              <Card.Body>
                <Card.Title>Vivint SmartHome SWE</Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text> */}
              </Card.Body>
            </Card>

            <Card className="workCard" onClick={() => this.openWorkModal(this.workExperience.BRAINPOWER)}>
              <Card.Img variant="top" src={bpLogo} />
              <Card.Body>
                <Card.Title>Brain Power TPM</Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text> */}
              </Card.Body>
            </Card>
            </CardDeck>
          </Container>
        </div>


        {/* Research Experience */}
        <Container style={{marginTop: "10vh", paddingTop: "10vh", height: "80vh"}}>
        <h1 className="flexbox">Research Experience</h1>
            <CardDeck>
            <Card className="researchCard">
              
              <Card.Img variant="top" src={haystackLogo} />
              <Card.Body>
                <Card.Title>MIT Haystack Group</Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text> */}
              </Card.Body>
            </Card>

            <Card className="researchCard">
              <Card.Img variant="top" src={questLogo} />
              <Card.Body>
                <Card.Title>MIT Quest for Intelligence</Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text> */}
              </Card.Body>
            </Card>

            <Card className="researchCard">
              <Card.Img variant="top" src={mvlLogo} />
              <Card.Body>
                <Card.Title>MIT Man Vehicle Laboratory</Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text> */}
              </Card.Body>
            </Card>

            <Card className="researchCard">
              
              <Card.Img variant="top" src={rlLogo} />
              <Card.Body>
                <Card.Title>Independent Tutorial</Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text> */}
              </Card.Body>
            </Card>
            </CardDeck>
        </Container>
      </>
    )
  }



  setWorkInfo(workExperience) {
    switch (workExperience) {
      // case 1:
      //   console.log("Yext: ", this.workExperience.YEXT);
      //   console.log("In One");
      //   break;

      case this.workExperience.YEXT:
        this.setState({
            company: "Yext",
            position: "Sofware Engineering Intern",
            date: "Summer 2020",
            location: "New York, New York",
            description: "Lorem ipsum, in graphical and textual context, refers to filler" +
                         " text that is placed in a document or visual presentation. Lorem ipsum" +
                         " is derived from the Latin \"dolorem ipsum\" roughly translated as \"pain itself.\"" +
                         "\n\n Lorem ipsum presents the sample font and orientation of writing on web pages " +
                         "and other software applications where content is not the main concern of the developer.",
        })
        break;
      case this.workExperience.FACEBOOK:
        this.setState({
            company: "Facebook",
            position: "Sofware Engineering Intern",
            date: "Summer 2019",
            location: "New York, New York",
            description: "Lorem ipsum, in graphical and textual context, refers to filler" +
            " text that is placed in a document or visual presentation. Lorem ipsum" +
            " is derived from the Latin \"dolorem ipsum\" roughly translated as \"pain itself.\"" +
            "\n\n Lorem ipsum presents the sample font and orientation of writing on web pages " +
            "and other software applications where content is not the main concern of the developer.",
        })
        break;
      case this.workExperience.VIVINT:
        this.setState({
          company: "Vivint Smart Home",
          position: "Sofware Engineering Intern",
          date: "Summer 2020",
          location: "New York, New York",
          description: "Lorem ipsum, in graphical and textual context, refers to filler" +
                       " text that is placed in a document or visual presentation. Lorem ipsum" +
                       " is derived from the Latin \"dolorem ipsum\" roughly translated as \"pain itself.\"" +
                       "\n\n Lorem ipsum presents the sample font and orientation of writing on web pages " +
                       "and other software applications where content is not the main concern of the developer.",
        })
        break;
      case this.workExperience.BRAINPOWER:
        break;
    }
  }
}
