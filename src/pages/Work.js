import React, { Component } from "react";
import { Container } from "react-bootstrap";
import WorkPageEntry from "../components/WorkPageEntry.js";
import { WORK_EXPERIENCES } from "../shared/workExperience";

export default class Work extends Component {
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
          A significant part of my experience in software engineering has come
          from industy experience in the form of internships. I did my first
          internship in my senior year of high school as a part of a senior
          project. Since then I've done longer internships over each summer and
          I've done shorter internships over MIT's extended winter break, known
          as the Independent Activities Period (IAP).
        </p>

        <h1 style={{paddingBottom: "2vw"}}>Industry Experience</h1>
        {WORK_EXPERIENCES.filter((work) => work.workType == "job").map((work) => {
          return(
            <WorkPageEntry 
              image={work.image}
              company={work.company}
              position={work.position}
              date={work.date}
              location={work.location}
              description={work.shortDescription}
            />
          );
        })}
      </Container>
    );
  }
}
