import React from "react";
import styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";
import profileImage from "../assets/puntaCana.jpg";
import * as constants from "../Constants.js";

const Styles = styled.div`
  .link {
    text-decoration: none;
    font-weight: bold;
  }
`;

export const Contact = () => (
  <Styles>
    <Container
      style={{
        paddingTop: "10vh",
        height: `calc(100vh - ${constants.NAVBAR_HEIGHT}px)`,
      }}
    >
      <Row>
        <Col style={{ marginTop: "10vh" }}>
          <h1>
            <b>Contact Me</b>
          </h1>
          <h3
            style={{
              width: "75%",
              borderBottom: "2px solid black",
              paddingBottom: "2vh",
              marginBottom: "5vh",
            }}
          >
            Feel free to reach out!
          </h3>

          <h3>
            <a className="link" href="mailto:bcsamuels11@gmail.com">
              Email
            </a>
          </h3>
          <h3>
            <a
              className="link"
              href="https://www.linkedin.com/in/brent-samuels-mit20/"
            >
              LinkedIn
            </a>
          </h3>
          <h3>
            <a
              className="link"
              href="https://www.facebook.com/brent.samuels.7/"
            >
              Facebook
            </a>
          </h3>
        </Col>
        <Col
          style={
            document.documentElement.clientWidth < constants.DESKTOP_VIEWPORT
              ? { display: "none" }
              : { marginTop: "5vh" }
          }
        >
          <img alt="Alt" src={profileImage} className="profileImage" />
        </Col>
      </Row>
    </Container>
  </Styles>
);
