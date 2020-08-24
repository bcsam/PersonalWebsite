import React from "react";
import ResearchPageEntry from "../components/ResearchPageEntry.js";
import { Container } from "react-bootstrap";

export const Research = () => (
  <Container
    style={{ paddingTop: "10vh", paddingBottom: "5vw", height: "100%" }}
  >
    <h1>Overview</h1>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
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
      description={["Point 1", "Point 2"]}
    />
    <ResearchPageEntry
      project="Man Vehicle Laboratory UROP"
      date="February-June 2017"
      description={["Point 1", "Point 2"]}
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
  </Container>
);

// .divider {
//     height: 5px;
//     background-color: lightwhitesmoke;
//     width: 100%;
// }
