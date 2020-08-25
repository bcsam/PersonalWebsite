import React, { Component } from "react";
import { Redirect } from "react-router";
import { Container, Card, Button, CardDeck, Col, Row } from "react-bootstrap";
import "./Home.css";
import WorkModal from "../components/WorkModal";
import * as constants from "../Constants.js";
import * as routes from "../routes.js";

//assets
import bpLogo from "../assets/brainpower.png";
import facebookLogo from "../assets/facebook.png";
import haystackLogo from "../assets/haystack.png";
import homeBanner from "../assets/homePage.jpg";
import mvlLogo from "../assets/mvl.jpg";
import openLinkLogo from "../assets/openlink.jpg";
import painterlyImage from "../assets/painterly_square.png";
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
      isProjectsExpanded: false,
      isResearchExpanded: false,
      isWorkExpanded: false,
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
            <h1 style={{ fontSize: "max(5vw, 4vh)" }}>Brent Samuels</h1>
            <h3 style={{ fontSize: "max(2vw, 1.5vh)" }}>
              Software Engineer, Web Developer
            </h3>
          </div>
          <div className="overlay"></div>
          <img alt="Alt" src={homeBanner} className="homeImage" />
        </div>

        {/* About Me */}
        <Container style={{ paddingTop: "10vh", minHeight: "95vh" }}>
          <Row>
            <Col style={{ marginTop: "2vw" }}>
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
                onClick={() => this.setState({ redirectTo: routes.WORK })}
              >
                View Experience
              </Button>

              <Button
                variant="outline-dark"
                onClick={() => this.setState({ redirectTo: routes.CONTACT })}
              >
                Contact Me
              </Button>
            </Col>
            <Col
              style={
                document.documentElement.clientWidth <
                constants.DESKTOP_VIEWPORT
                  ? { display: "none" }
                  : {}
              }
            >
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
          style={{ backgroundColor: "whitesmoke" }}
        >
          <Container
            style={{
              backgroundColor: "whitesmoke",
              minHeight: "95vh",
              padding: "10vh 0",
            }}
          >
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

            <div
              style={
                this.state.isWorkExpanded
                  ? { display: "none" }
                  : { width: "100%", position: "relative", marginTop: "10vh" }
              }
            >
              <Button
                variant="outline-dark"
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
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

              {/* Place Holder */}
              <Card style={{ visibility: "hidden" }}></Card>
            </CardDeck>
          </Container>
        </div>

        {/* Research Experience */}
        <Container style={{ minHeight: "95vh", padding: "10vh 0" }}>
          <h1 className="flexbox">Research and Projects</h1>
          <CardDeck>
            <Card
              className="researchCard"
              onClick={() => this.openWorkModal(this.workExperience.NB)}
            >
              <Card.Img variant="top" src={haystackLogo} />
              <Card.Body>
                <Card.Title>MIT Haystack Group</Card.Title>
              </Card.Body>
            </Card>

            <Card
              className="researchCard"
              onClick={() => this.openWorkModal(this.workExperience.QUEST)}
            >
              <Card.Img variant="top" src={questLogo} />
              <Card.Body>
                <Card.Title>MIT Quest for Intelligence</Card.Title>
              </Card.Body>
            </Card>

            <Card
              className="researchCard"
              onClick={() => this.openWorkModal(this.workExperience.MVL)}
            >
              <Card.Img variant="top" src={mvlLogo} />
              <Card.Body>
                <Card.Title>MIT Man Vehicle Laboratory</Card.Title>
              </Card.Body>
            </Card>

            <Card
              className="researchCard"
              onClick={() => this.openWorkModal(this.workExperience.KINECT)}
            >
              <Card.Img variant="top" src={rlLogo} />
              <Card.Body>
                <Card.Title>Kinect Gestural Classification Project</Card.Title>
              </Card.Body>
            </Card>
          </CardDeck>

          <div
            style={
              this.state.isResearchExpanded
                ? { display: "none" }
                : { width: "100%", position: "relative", marginTop: "10vh" }
            }
          >
            <Button
              variant="outline-dark"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              onClick={() => {
                console.log("Hit me");
                this.setState({ isResearchExpanded: true });
              }}
            >
              See More
            </Button>
          </div>

          <CardDeck
            style={
              this.state.isResearchExpanded
                ? { marginTop: "5vh" }
                : { display: "none" }
            }
          >
            <Card
              className="researchCard"
              onClick={() => this.openWorkModal(this.workExperience.JOBBIES)}
            >
              <Card.Img variant="top" src={rlLogo} />
              <Card.Body>
                <Card.Title>Jobbies Web Application</Card.Title>
              </Card.Body>
            </Card>

            <Card
              className="researchCard"
              onClick={() => this.openWorkModal(this.workExperience.PAINTERLY)}
            >
              <Card.Img variant="top" src={painterlyImage} />
              <Card.Body>
                <Card.Title>Painterly Photo Rendering Project</Card.Title>
              </Card.Body>
            </Card>

            {/* Place Holder */}
            <Card style={{ visibility: "hidden" }}></Card>
            <Card style={{ visibility: "hidden" }}></Card>
          </CardDeck>
        </Container>
      </>
    );
  }

  setWorkInfo(workExperience) {
    switch (workExperience) {
      // Work Experiences
      case this.workExperience.BRAINPOWER:
        this.setState({
          company: "Brain Power",
          position: "Technical Product Management Intern",
          date: "January-February 2020",
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

      case this.workExperience.VIVINT:
        this.setState({
          company: "Vivint Smart Home",
          position: "Sofware Engineering Extern",
          date: "January-February 2018",
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

      // JOBBIES: 7,
      // KINECT: 8,
      // MVL: 9,
      // NB: 10,
      // PAINTERLY: 11,
      // QUEST: 12,

      // Research and Projects
      case this.workExperience.JOBBIES:
        this.setState({
          company: "Jobbies Web Application",
          position: "Group Member",
          date: "November-December 2019",
          location: "Cambridge, Massachusetts",
          description: "Description Coming Soon",
        });
        break;

      case this.workExperience.KINECT:
        this.setState({
          company: "Kinect Gestural Classification Project",
          position: "Project Creator",
          date: "March-May 2020",
          location: "Cambridge, Massachusetts",
          description: "Description Coming Soon",
        });
        break;

      case this.workExperience.MVL:
        this.setState({
          company: "MIT Man Vehicle Laboratory",
          position: "Undergraduate Researcher (UROP)",
          date: "February-June 2017",
          location: "Cambridge, Massachusetts",
          description: "Description Coming Soon",
        });
        break;

      case this.workExperience.NB:
        this.setState({
          company: "MIT Haystack Group",
          position: "Undergraduate Researcher (SuperUROP)",
          date: "September 2019-May 2020",
          location: "Cambridge, Massachusetts",
          description:
            "My project is predominately focused on full-stack development of an annotated textbook, " +
            "called Nota Bene. More specifically, this website allows an instructor to create academic " +
            "sections of students and upload pdf assignments. The students can subsequently leave comments " +
            "and like other students’ comments in reference to specific parts of the text. My project is to " +
            "extend the functionality of the current site by adding several features, including allowing " +
            "archiving and deleting courses, allowing users to request membership in courses, and allowing " +
            "students who switch sections to view comments and threads from their previous sections but not " +
            "recent updates. For this project, I am mainly working in Vue.js and Node.js.",
        });
        break;

      case this.workExperience.PAINTERLY:
        this.setState({
          company: "Painterly Photo Rendering Project",
          position: "Project Creator",
          date: "May 2019",
          location: "Cambridge, Massachusetts",
          description: "Description Coming Soon",
        });
        break;

      case this.workExperience.QUEST:
        this.setState({
          company: "MIT Quest for Intelligence",
          position: "Undergraduate Researcher (UROP)",
          date: "January-May 2019",
          location: "Cambridge, Massachusetts",
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
