import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { Container, Card, Button, CardDeck, Col, Row } from "react-bootstrap";
import "./Home.css";
import { WORK_EXPERIENCES } from "./shared/workExperience.js";
import WorkModal from "../components/WorkModal";
import * as constants from "../Constants.js";
import * as routes from "../routes.js";



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.workExperience = {
      BLOOMBERG: 0,
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
      isResearchExpanded: false,
      isWorkExpanded: false,
      redirectTo: "",
      selectedExperience: null
    };
  }

  openWorkModal(workID) {
    // this.setWorkInfo(workExperience);
    this.setState({
      selectedExperience: WORK_EXPERIENCES.filter((experience) => workID == experience.id)[0] 
    });
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    //assets
    const bpLogo = "/assets/brainpower.png";
    const facebookLogo = "/assets/facebook.png";
    const haystackLogo = "/assets/haystack.png";
    const homeBanner = "/assets/homePage.jpg";
    const kinectImage = "/assets/kinect.jpeg";
    const mitLogo = "/assets/mit.png";
    const mvlLogo = "/assets/mvl.jpg";
    const openLinkLogo = "/assets/openlink.jpg";
    const painterlyImage = "/assets/painterly_square.png";
    const profileImage = "/assets/propic.jpg";
    const questLogo = "/assets/quest.png";
    const vivintLogo = "/assets/vivint.jpg";
    const yextLogo = "/assets/yext.png";


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
          show={this.state.selectedExperience != null}
          onHide={() => this.setState({ selectedExperience: null })}
          company={this.state.selectedExperience ? this.state.selectedExperience.company : null}
          position={this.state.selectedExperience ? this.state.selectedExperience.position : null}
          date={this.state.selectedExperience ? this.state.selectedExperience.date : null}
          location={this.state.selectedExperience ? this.state.selectedExperience.location : null}
          description={this.state.selectedExperience ? this.state.selectedExperience.description : null}
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
                  onClick={() => this.openWorkModal(this.workExperience.BLOOMBERG)}
                >
                  <Card.Img variant="top" src={yextLogo} />
                  <Card.Body>
                    <Card.Title>Yext SWE</Card.Title>
                  </Card.Body>
                </Card>

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
                onClick={() => this.openWorkModal(this.workExperience.VIVINT)}
              >
                <Card.Img variant="top" src={vivintLogo} />
                <Card.Body>
                  <Card.Title>Vivint SmartHome SWE</Card.Title>
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
}
