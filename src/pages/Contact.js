import React from "react";
import styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";
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
        minHeight: `calc(100vh - ${constants.NAVBAR_HEIGHT}px)`,
        height: `100%`,
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
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </h3>
          <h3>
            <a
              className="link"
              href="https://www.facebook.com/brent.samuels.7/"
              target="_blank"
              rel="noopener noreferrer"
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
          <img alt="Alt" src={"/assets/puntaCana.jpg"} className="profileImage" />
        </Col>
      </Row>
    </Container>
  </Styles>
);
