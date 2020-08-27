import React, { Component } from "react";
import { Container } from "react-bootstrap";
import WorkPageEntry from "../components/WorkPageEntry.js";

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
          I've done a couple of shorter internships over MIT's extended winter
          break, called the Independent Activities Period (IAP).
        </p>

        <h1>Industry Experience</h1>
        <WorkPageEntry
          company="Yext"
          position="Software Engineering Intern"
          date="Summer 2020"
          location="New York, New York"
          description={[
            "Reduced JS artifacts by 91% from migrating builds to rules_closure and presented results to group management",
            "Enforced HIPAA compliance through several Jira stories involving export logging and both tagging and encryption of identifying healthcare information",
          ]}
        />

        <WorkPageEntry
          company="Brain Power"
          position="Technical Product Management Extern"
          date="January-February 2020"
          location="Cambridge, Massachusetts"
          description={[
            "Led a sub-team of 5 through the design and development of a concept teaser mobile application to expose a larger audience of customers to a variety of the company’s Google Glass applications",
            "Led daily stand-up and biweekly sprint retrospective to regulate the assignment of Jira tickets for each sprint",
          ]}
        />

        <WorkPageEntry
          company="Facebook"
          position="Sofware Engineering Intern"
          date="Summer 2019"
          location="New York, New York"
          description={[
            "Redesigned the navigation of the internal website that allows designers to create specifications for UI engineers",
            "Coordinated a team of 3 and presented weekly to higher management on the progress of the project",
          ]}
        />

        <WorkPageEntry
          company="Facebook"
          position="Sofware Engineering Intern"
          date="Summer 2018"
          location="Menlo Park, California"
          description={[
            "Created a web app to monitor the number of occupants in an Oculus clean room and the duration of their stay in order to prevent harmful chemical exposure and to allow Oculus development to scale more safely",
            "Created a Messenger bot to check the room status every 5 minutes and message the room owner if needed",
          ]}
        />

        <WorkPageEntry
          company="Vivint Smart Home"
          position="Sofware Engineering Extern"
          date="January-February 2018"
          location="Provo, Utah"
          description={[
            "Created a program to categorize the Elasticsearch data of triggered security devices in order to allow users to filter alarm notifications by device type",
            "Improved the internal web app permission and group requirements to regulate employees’ site access",
          ]}
        />

        <WorkPageEntry
          company="Facebook University"
          position="Mobile Application Development Intern"
          date="Summer 2017"
          location="Seattle, Washington"
          description={[
            "Created an Android messaging app on a team of 3 which gives numerical feedback about the tone, style, and social tendencies of messages in order to aid users on the autism spectrum with tone detection",
            "Presented app to a crowd of 150 spectators",
            "Underwent CodePath app development training and produced several apps including a mock Twitter app",
          ]}
        />
        <WorkPageEntry
          company="OpenLink Software"
          position="Software Intern"
          date="May-June 2016"
          location="Burlington, Massachusetts"
          description={[
            "Worked one-on-one with the founder of OpenLink Software to create and query profiles through use of RDF in Turtle notation and SPARQL",
            "Studied various data topics including RDF-based linked data, digital sentence structure, and data integration",
            "Delivered presentation of reflections to fellow classmates and faculty",
          ]}
        />
      </Container>
    );
  }
}
