import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { Container, Card, Button, CardDeck, Col, Row } from "react-bootstrap";
import "./Home.css";
import WorkModal from "../components/WorkModal";
import * as constants from "../Constants.js";
import * as routes from "../routes.js";

//assets
import bpLogo from "./assets/brainpower.png";
import facebookLogo from "./assets/facebook.png";
import haystackLogo from "./assets/haystack.png";
import homeBanner from "./assets/homePage.jpg";
import kinectImage from "./assets/kinect.jpeg";
import mitLogo from "./assets/mit.png";
import mvlLogo from "./assets/mvl.jpg";
import openLinkLogo from "./assets/openlink.jpg";
import painterlyImage from "./assets/painterly_square.png";
import profileImage from "./assets/propic.jpg";
import questLogo from "./assets/quest.png";
import vivintLogo from "./assets/vivint.jpg";
import yextLogo from "./assets/yext.png";

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
    this.setWorkInfo(workExperience);
    this.setState({
      showWorkModal: true,
    });
  }

  componentWillMount() {
    window.scrollTo(0, 0);
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
                <Link
                  style={{
                    color: "black",
                  }}
                  to={routes.ABOUT}
                >
                  <b>See More</b>
                </Link>
                {/* </a> */}
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
                onClick={() => this.openWorkModal(this.workExperience.OPENLINK)}
              >
                <Card.Img
                  variant="top"
                  src={openLinkLogo}
                  style={{ boxShadow: "0 1px lightgray" }}
                />
                <Card.Body>
                  <Card.Title>OpenLink Software SWE</Card.Title>
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
              <Card.Img variant="top" src={kinectImage} />
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
              <Card.Img variant="top" src={mitLogo} />
              <Card.Body>
                <Card.Title>Jobbies Web Application Project</Card.Title>
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
          description:
            //"Brain Power is a startup that develops games and AR experiences on Google Glass to help children on the autism spectrum with social-emotional skills.
            "The main project that I and another TPM intern addressed was the design and " +
            "creation of a mobile concept teaser to help advertise Brain Power's products. " +
            "We addressed the problem through client research, iterative development of UI " +
            "mockups on Figma with consultation with the company CEO, and creation of " +
            "development stories on Jira.",
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
            "potentially dangerous situations. For this project I coded predominately in React.js " +
            "and Hack.",
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
            "For this internship, I worked on a team of three to create an app which gives feedback about the " +
            "tone, style, and social tendencies of messages to help users on the autism spectrum with tone detection." +
            "The app allows the user to send and receive messages from their phone number, color codes the messages " +
            "based on the primary emotion, shows numerical ratings on the tone of a given message when clicked, and " +
            "shows the average tone of interactions with a given user when clicked. At the end of the internship, we " +
            "presented our prototype of the app to a crowd of 150 Facebook employees.",
        });
        break;

      case this.workExperience.OPENLINK:
        this.setState({
          company: "OpenLink Software",
          position: "Sofware Engineering Intern",
          date: "May-June 2016",
          location: "Burlington, Massachusetts",
          description:
            "This internship was part of an independent senior project for my high school. I began by studying a " +
            "variety of big data topics including RDF-based linked data, digital sentence structure, and data " +
            "integration. From there, I worked with the founder of OpenLink software to create and query profiles " +
            "through use of RDF in Turtle notation and SPARQL. At the end of my internship, I gave a presentation " +
            "of my experience to students and faculty at my school.",
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
          description:
            "At Yext I worked on a number of Jira stories varying in topic. Nevertheless, my main project " +
            "was that I spearheaded a development epic to migrate my team's JavaScript builds from plovr " +
            "to closure rules, completing two-thirds of the epic single-handedly. This epic reduced the " +
            "JavaScript artifacts of our builds by up to 91%, and I presented these results to a collection " +
            "of three teams.",
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
          description:
            "This project was a part of my advanced undergraduate study (AUS) in web development. The problem that " +
            "we addressed was that during a job recruiting season clients have a difficult time keeping track of " +
            "all of their job applications, application statuses, and recruiting emails and often rely on spreadsheets." +
            "As a team of four, we created a web application that filters and displays all the user's recruiting emails and " +
            "allows the user to create and attach them to jobbie cards. Each jobbie card represents an application to a " +
            "particular role at a particular company including the position, company, application status, and time between " +
            "updates. We created the application through use of Vue.js and Gmail API services.",
        });
        break;

      case this.workExperience.KINECT:
        this.setState({
          company: "Kinect Gestural Classification Project",
          position: "Project Creator",
          date: "March-May 2020",
          location: "Cambridge, Massachusetts",
          description:
            "This project was a part of my advanced undergraduate study (AUS) in multi-modal user " +
            "interfaces. The problem that I was addressing is that when dance choreographers teach it is often " +
            "difficult for them to give their dancers individual feedback. I created a web application which allows " +
            "a dancer to record themselves, will report when the dancer's movement was significantly different from a " +
            "recording of their choreographer, and will display side by side videos starting at the time when they differ." +
            "I created the app through development in Vue.js, python, and processing with help of a processing skeleton " +
            "tracking package.",
        });
        break;

      case this.workExperience.MVL:
        this.setState({
          company: "MIT Man Vehicle Laboratory",
          position: "Undergraduate Researcher (UROP)",
          date: "February-June 2017",
          location: "Cambridge, Massachusetts",
          description:
            "My project focused on testing for the optimal level of automation for operators " +
            "of the International Space Station's telerobotic arm, the SSRMS, through virtual simulations. " +
            "More specifically, we had human tests subjects perform tasks in the simulation under three different " +
            "levels of automation and we used the Situation Awareness Global Assessment Technique (SAGAT) " +
            "throughout testing to assess their performance. My role was testing the simulation, improving " +
            "our implementation of SAGAT, classifying the results of the assessment, and proctoring user testing.",
        });
        break;

      case this.workExperience.NB:
        this.setState({
          company: "MIT Haystack Group",
          position: "Undergraduate Researcher (SuperUROP)",
          date: "September 2019-May 2020",
          location: "Cambridge, Massachusetts",
          description:
            "My project was predominately focused on full-stack development of an annotated textbook, " +
            "called Nota Bene. More specifically, this website allows an instructor to create academic " +
            "sections of students and upload pdf assignments. The students can subsequently leave comments " +
            "and like other students’ comments in reference to specific parts of the text. My project was to " +
            "extend the functionality of the current site by adding several features, including allowing " +
            "archiving and deleting courses, allowing users to request membership in courses, and allowing " +
            "students who switch sections to view comments and threads from their previous sections but not " +
            "recent updates. For this project, I was mainly working in Vue.js and Node.js.",
        });
        break;

      case this.workExperience.PAINTERLY:
        this.setState({
          company: "Painterly Photo Rendering Project",
          position: "Project Creator",
          date: "May 2019",
          location: "Cambridge, Massachusetts",
          description:
            //Painterly Rendering for Video and Interaction by Aaron Hertzmann
            "This project was a part of my advanced undergraduate study (AUS) in digital and " +
            "computational photography. For my project, I transformed digital photo renderings to appear as " +
            "photo-realistic paintings, with visible brush strokes, of the original image. At a high level, " +
            "I did so through calculations of two images, the high frequency areas and the angles of minimum " +
            "change for each pixel in the original image. I then applied a large number of colored brushstrokes " +
            "to an initially blank image using this information for density and angles of the brushstrokes.",
        });
        break;

      case this.workExperience.QUEST:
        this.setState({
          company: "MIT Quest for Intelligence",
          position: "Undergraduate Researcher (UROP)",
          date: "January-May 2019",
          location: "Cambridge, Massachusetts",
          description:
            "The problem that we addressed was making machine learning concepts more accessible to kids in grades " +
            "K-12. My main project was developing a GANpaint Scratch block extension to teach the students " +
            "about generative adversarial networks (GANs). GANpaint is an MIT developed application which " +
            "which renders a photo-realistic image, allows a user to mutate the image with a pointer and " +
            "a selection of options, and then regenerates a new photo-realistic image with the mutation.",
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
