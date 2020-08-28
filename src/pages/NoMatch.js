import React from "react";
import { Container } from "react-bootstrap";
import * as constants from "../Constants.js";

export const NoMatch = () => (
  <Container
    style={{
      paddingTop: "10vh",
      height: `calc(100vh - ${constants.NAVBAR_HEIGHT}px)`,
    }}
  >
    <h1>Page Not Found</h1>
  </Container>
);
