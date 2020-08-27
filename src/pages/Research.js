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
          through my classes and programs. I participated in the Undergraduate
          Reseach Opportunities Program (
          <a href="https://urop.mit.edu/">UROP</a>) multiple times and then went
          on to participate in the advanced year-long SuperUROP program for my
          sponsored research experiences. Additionally, my Advanced
          Undergraduated Studies (
          <a href="https://www.eecs.mit.edu/academics-admissions/undergraduate-programs/curriculum/advanced-undergraduate-subjects">
            AUS
          </a>
          )
        </p>

        <h1>Sponsored Research</h1>
        <ResearchPageEntry
          project="Nota Bene Annotated Textbook SuperUROP"
          date="August 2019-June 2020"
          description={["Point 1", "Point 2"]}
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
          description={["Point 1", "Point 2"]}
        />
        <ResearchPageEntry
          project="Jobbies Web Application"
          date="November-December 2020"
          description={["Point 1", "Point 2"]}
        />
        <ResearchPageEntry
          project="Painterly Photo Rendering Project"
          date="May 2019"
          description={["Point 1", "Point 2"]}
        />
      </Container>
    );
  }
}
