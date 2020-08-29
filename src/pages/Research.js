import React, { Component } from "react";
import ResearchPageEntry from "../components/ResearchPageEntry.js";
import { Container } from "react-bootstrap";

export default class Research extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Container
        style={{ paddingTop: "10vh", paddingBottom: "5vw", height: "100%" }}
      >
        <h1>Overview</h1>
        <p>
          During my time at MIT I pursued academic research opportunities
          through my classes and programs. For my sponsored research, I
          participated in the Undergraduate Reseach Opportunities Program (
          <b>
            <a style={{ color: "black" }} href="https://urop.mit.edu/">
              UROP
            </a>
          </b>
          ) multiple times and then went on to participate in the advanced
          year-long SuperUROP program. For my projects, my Advanced
          Undergraduated Studies (
          <b style={{ color: "black" }}>
            <a
              style={{ color: "black" }}
              href="https://www.eecs.mit.edu/academics-admissions/undergraduate-programs/curriculum/advanced-undergraduate-subjects"
            >
              AUS
            </a>
          </b>
          ) gave opportunities to create extended projects near the end of the
          course.
        </p>

        <h1>Sponsored Research</h1>
        <ResearchPageEntry
          project="Nota Bene Annotated Textbook SuperUROP"
          date="August 2019-June 2020"
          description={[
            "Spearheaded full-stack development of an anotated textbook website using Vue.js, Node.js, and PostgreSQL",
            "Tested usability and effectiveness of website through user testing at UC Davis",
            "Presented results of research through a series of presentations and a thesis",
          ]}
        />
        <ResearchPageEntry
          project="MIT Quest for Intelligence UROP"
          date="January-May 2019"
          description={[
            "Developed a GANpaint Scratch block extension to teach young students about generative adversarial networks",
            "Improved the user experience and functionality of a variety of artificial intelligence Scratch block extensions",
          ]}
        />
        <ResearchPageEntry
          project="Man Vehicle Laboratory UROP"
          date="February-June 2017"
          description={[
            "Modified a virtual simulator for a NASA-sponsored project to assess human subjects’ operation of the International Space Station’s telerobotic arm under varying levels of automation",
            "Implemented the evaluation and data output of subjects’ situational awareness while using the simulator",
          ]}
        />

        <h1>Projects</h1>
        <ResearchPageEntry
          project="Kinect Gestural Classification"
          date="March-May 2020"
          description={[
            "Created a web application that critiques a dancer's performance of pre-recorded dance choreography through use of Kinect skeleton tracking",
            "Presented iterative models of prototype to peers and faculty throughout development",
          ]}
        />
        <ResearchPageEntry
          project="Jobbies Web Application"
          date="November-December 2020"
          description={[
            "Created an award-winning web application on a team of 4 which organizes a user's job applications including their position, company, status, and time between updates",
            "Incorporated gmail api to filter a user's emails and allow them to attach recruiting emails to their job application objects",
          ]}
        />
        <ResearchPageEntry
          project="Painterly Photo Rendering Project"
          date="May 2019"
          description={[
            "Transformed digital photo renderings to resemble photo-realistic paintings with visible brush strokes",
          ]}
        />
      </Container>
    );
  }
}
