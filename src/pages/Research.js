import React, { Component } from "react";
import ResearchPageEntry from "../components/ResearchPageEntry.js";
import { Container } from "react-bootstrap";
import { WORK_EXPERIENCES } from "../shared/workExperience";

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

        <h1 style={{paddingBottom: "2vw"}}>Sponsored Research</h1>
        { WORK_EXPERIENCES.filter((project) => project.workType === "research").map((project) => {
          return(
            <div style={{marginBottom: "25px"}}>
              <ResearchPageEntry
                image={project.image}
                project={project.company}
                date={project.date}
                description={project.shortDescription}
              />
            </div>
          )
        })}

        <h1 style={{paddingBottom: "2vw"}}>Projects</h1>
        { WORK_EXPERIENCES.filter((project) => project.workType === "project").map((project) => {
          return(
            <div style={{marginBottom: "25px"}}>
              <ResearchPageEntry
                image={project.image}
                project={project.company}
                date={project.date}
                description={project.shortDescription}
              />
            </div>
          )
        })}
      </Container>
    );
  }
}
