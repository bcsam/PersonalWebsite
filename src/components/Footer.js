import React from "react";
import { Navbar } from "react-bootstrap";
import styled from "styled-components";
import * as routes from "../routes.js";

const Styles = styled.div`
  .navbar {
    background-color: #000000;
    box-shadow: 0 1px whitesmoke;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #ffffff;

    &:hover {
      color: white;
    }
  }
`;

export const Footer = () => (
  <Styles>
    <Navbar sticky="bottom" expand="lg">
      <Navbar.Brand href={routes.HOME}>Created by Brent Samuels</Navbar.Brand>
    </Navbar>
  </Styles>
);
