import React, { Component } from "react";
import { Redirect } from "react-router";
import { Container, Card, Button, CardDeck, Col, Row } from "react-bootstrap";
import "./Home.css";
import WorkModal from "../components/WorkModal";
import * as routes from "../routes.js";

//assets
import bpLogo from "../assets/brainpower.png";
import facebookLogo from "../assets/facebook.png";
import haystackLogo from "../assets/haystack.png";
import homeBanner from "../assets/homePage.jpg";
import mvlLogo from "../assets/mvl.jpg";
import openLinkLogo from "../assets/openlink.jpg";
import profileImage from "../assets/propic.jpg";
import questLogo from "../assets/quest.png";
import rlLogo from "../assets/rl.jpg";
import vivintLogo from "../assets/vivint.jpg";
import yextLogo from "../assets/yext.png";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.workExperience = {
      BRAINPOWER: 1,
      FACEBOOK_MPK: 2,
      FACEBOOK_NYC: 3,
      FBU: 4,
      OPENLINK: 5,
      VIVINT: 6,
      YEXT: 7,

      JOBBIES: 8,
      KINECT: 9,
      MVL: 10,
      NB: 11,
      PAINTERLY: 12,
      QUEST: 13,
    };

    this.state = {
      isWorkExpanded: false,
      isProjectsExpanded: false,
      redirectTo: "",
      showWorkModal: false,

      company: "",
      position: "",
      date: "",
      location: "",
      description: "",
    };
  }

  openWorkModal(workExperience) {
    console.log("In Open Work Modal", workExperience);
    this.setWorkInfo(workExperience);
    console.log("Company:", this.state.company);
    this.setState({
      showWorkModal: true,
    });
  }

  render() {
    if (this.state.redirectTo.length > 0) {
      return <Redirect push to={this.state.redirectTo} />;
    }

    return (
      <>
        {/* Top Display */}
        <div style={{ marginTop: "56px" }}>
          <div className="homeDisplayText">
            <h1 style={{ fontSize: "5vw" }}>Brent Samuels</h1>
            <h3 style={{ fontSize: "2vw" }}>
              Software Engineer, Web Developer
            </h3>
          </div>
          <div className="overlay"></div>
          <img alt="Alt" src={homeBanner} className="homeImage" />
        </div>

        {/* About Me */}
        <Container style={{ paddingTop: "10vh", height: "80vh" }}>
          <Row>
            <Col style={{ marginTop: "5vh" }}>
              <h1>About Me</h1>
              <p>
                Hi, my name is <b>Brent Samuels</b>. I graduated from The
                Massachusetts Institute of Technology (MIT) in 2020 with my
                Bachelor of Science Degree in Computer Science and Engineering
                (Course 6-3). During, my time at MIT I developed a passion for
                Human Computer Interactions (HCI) and particularly full-stack
                web development.
                <b> </b>
                <a
                  href="/PersonalWebsite/about"
                  style={{
                    color: "black",
                  }}
                >
                  <b>See More</b>
                </a>
              </p>

              <Button
                variant="outline-dark"
                style={{ marginRight: "1vw" }}
                href="../assets/resume.pdf"
              >
                View Resume
              </Button>

              {/* href="mailto:gklitt@gmail.com" */}
              <Button
                variant="outline-dark"
                onClick={() => this.setState({ redirectTo: routes.CONTACT })}
              >
                Contact Me
              </Button>
            </Col>
            <Col>
              <img alt="Alt" src={profileImage} className="profileImage" />
            </Col>
          </Row>

          <div className="divider"></div>
        </Container>

        {/* Work Experience */}
        <WorkModal
          show={this.state.showWorkModal}
          onHide={() => this.setState({ showWorkModal: false })}
          company={this.state.company}
          position={this.state.position}
          date={this.state.date}
          location={this.state.location}
          description={this.state.description}
        />

        <div
          className="workExperienceContainer"
          style={
            this.state.isWorkExpanded
              ? { backgroundColor: "whitesmoke", height: "125vh" }
              : { backgroundColor: "whitesmoke", height: "90vh" }
          }
        >
          <Container style={{ marginTop: "10vh", padding: "10vh 0" }}>
            <h1 className="flexbox">Work Experience</h1>
            <CardDeck>
              <Card
                className="workCard"
                onClick={() => this.openWorkModal(this.workExperience.YEXT)}
              >
                <Card.Img variant="top" src={yextLogo} />
                <Card.Body>
                  <Card.Title>Yext SWE</Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="workCard"
                onClick={() =>
                  this.openWorkModal(this.workExperience.FACEBOOK_NYC)
                }
              >
                <Card.Img
                  variant="top"
                  src={facebookLogo}
                  style={{ boxShadow: "0 1px lightgray" }}
                />
                <Card.Body>
                  <Card.Title>Facebook SWE (NYC)</Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="workCard"
                onClick={() =>
                  this.openWorkModal(this.workExperience.FACEBOOK_MPK)
                }
              >
                <Card.Img
                  variant="top"
                  src={facebookLogo}
                  style={{ boxShadow: "0 1px lightgray" }}
                />
                <Card.Body>
                  <Card.Title>Facebook SWE (MPK)</Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="workCard"
                onClick={() => this.openWorkModal(this.workExperience.VIVINT)}
              >
                <Card.Img variant="top" src={vivintLogo} />
                <Card.Body>
                  <Card.Title>Vivint SmartHome SWE</Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
            <div style={{ marginLeft: "auto", marginRight: "auto" }}>
              {/* TODO: make this better */}
              <Button
                variant="outline-dark"
                style={
                  this.state.isWorkExpanded
                    ? { display: "none" }
                    : { marginLeft: "46%", marginTop: "5%" }
                }
                onClick={() => {
                  console.log("Hit me");
                  this.setState({ isWorkExpanded: true });
                }}
              >
                See More
              </Button>
            </div>

            {/* Expand Deck */}
            <CardDeck
              style={
                this.state.isWorkExpanded
                  ? { marginTop: "5vh" }
                  : { display: "none" }
              }
            >
              <Card
                className="workCard"
                onClick={() => this.openWorkModal(this.workExperience.FBU)}
              >
                <Card.Img
                  variant="top"
                  src={facebookLogo}
                  style={{ boxShadow: "0 1px lightgray" }}
                />
                <Card.Body>
                  <Card.Title>Facebook University</Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="workCard"
                onClick={() =>
                  this.openWorkModal(this.workExperience.BRAINPOWER)
                }
              >
                <Card.Img variant="top" src={bpLogo} />
                <Card.Body>
                  <Card.Title>Brain Power TPM</Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="workCard"
                onClick={() => this.openWorkModal(this.workExperience.OPENLINK)}
              >
                <Card.Img variant="top" src={openLinkLogo} />
                <Card.Body>
                  <Card.Title>OpenLink Software</Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ visibility: "hidden" }}></Card>
            </CardDeck>
          </Container>
        </div>

        {/* Research Experience */}
        <Container
          style={{ marginTop: "10vh", paddingTop: "10vh", height: "80vh" }}
        >
          <h1 className="flexbox">Research and Projects</h1>
          <CardDeck>
            <Card className="researchCard">
              <Card.Img variant="top" src={haystackLogo} />
              <Card.Body>
                <Card.Title>MIT Haystack Group</Card.Title>
              </Card.Body>
            </Card>

            <Card className="researchCard">
              <Card.Img variant="top" src={questLogo} />
              <Card.Body>
                <Card.Title>MIT Quest for Intelligence</Card.Title>
              </Card.Body>
            </Card>

            <Card className="researchCard">
              <Card.Img variant="top" src={mvlLogo} />
              <Card.Body>
                <Card.Title>MIT Man Vehicle Laboratory</Card.Title>
              </Card.Body>
            </Card>

            <Card className="researchCard">
              <Card.Img variant="top" src={rlLogo} />
              <Card.Body>
                <Card.Title>Independent Tutorial</Card.Title>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </>
    );
  }

  setWorkInfo(workExperience) {
    switch (workExperience) {
      // JOBBIES: 7,
      // KINECT: 8,
      // MVL: 9,
      // NB: 10,
      // PAINTERLY: 11,
      // QUEST: 12,

      case this.workExperience.BRAINPOWER:
        this.setState({
          company: "Brain Power",
          position: "Technical Product Management Intern",
          date: "Independent Activites Period (Winter) 2020",
          location: "Cambridge, Massachusetts",
          description: "Description Coming Soon",
        });
        break;

      case this.workExperience.FACEBOOK_MPK:
        this.setState({
          company: "Facebook",
          position: "Sofware Engineering Intern",
          date: "Summer 2018",
          location: "Menlo Park, California",
          description:
            "The problem that I addressed in my project was creating a system to monitor the " +
            "occupancy of Oculus clean rooms since they can contain potentially harmful chemicals. " +
            "I did so by creating a 3-part application from scratch. The first part was a check " +
            "in/check out app for Facebook’s internal tablet, the second part was a web app for " +
            "monitoring the rooms, and the last part was a messenger bot to notify room owners of " +
            "potentially dangerous situations. For this project I coded predominately in React.js and Hack.",
        });
        break;

      case this.workExperience.FACEBOOK_NYC:
        this.setState({
          company: "Facebook",
          position: "Sofware Engineering Intern",
          date: "Summer 2019",
          location: "New York, New York",
          description:
            "My primary project was full-stack redevelopment of an internal website, called Pixelcloud, " +
            "which allows designers to create specifications for UI engineers. My project involved " +
            "several changes predominately focused on the navigation of the website, including adding " +
            "and standardizing search bars and collapsible sidebars in all views. Additionally, I coordinated " +
            "a team of 3 and presented weekly to higher management on the progress of the project. For this " +
            "project I coded predominately in React.js and Hack.",
        });
        break;

      case this.workExperience.FBU:
        this.setState({
          company: "Facebook University",
          position: "Mobile Application Development Intern",
          date: "Summer 2017",
          location: "Seattle, Washington",
          description:
            "• Created an Android messaging app which gives numerical feedback about the tone, style, and social tendencies of messages in order to aid users on the autism spectrum with tone detection" +
            "• Presented app to a crowd of 150 spectators" +
            "• Underwent CodePath app development training and produced several apps including a mock Twitter app",
        });
        break;

      case this.workExperience.OPENLINK:
        this.setState({
          company: "OpenLink Software",
          position: "Sofware Intern",
          date: "May-June 2016",
          location: "Burlington, Massachusetts",
          description:
            "• Worked one-on-one with the founder of OpenLink Software to create and query profiles through use of RDF in Turtle notation and SPARQL \n" +
            "• Studied various data topics including RDF-based linked data, digital sentence structure, and data integration \n" +
            "• Delivered presentation of reflections to fellow classmates and faculty",
        });
        break;

      //Done
      case this.workExperience.VIVINT:
        this.setState({
          company: "Vivint Smart Home",
          position: "Sofware Engineering Extern",
          date: "Independent Activities Period (Winter break) 2018",
          location: "Provo, Utah",
          description:
            "The problem that I addressed in my project was categorizing the data of Vivint home " +
            "security devices so that a user could ultimately select the categories of devices " +
            "from which they would like to receive notifications. To do so, I created a program " +
            "which categorizes Elasticsearch data of triggered security devices based on the " +
            "incoming fields. For this project, I worked predominately in Python and partially in Go.",
        });
        break;

      case this.workExperience.YEXT:
        this.setState({
          company: "Yext",
          position: "Sofware Engineering Intern",
          date: "Summer 2020",
          location: "New York, New York",
          description: "Description Coming Soon",
        });
        break;

      default:
        console.log(
          "ERROR: Hit the default case of workExperience switch in Home.js"
        );
        break;
    }
  }
}
