import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import * as routes from "../routes.js";

const Styles = styled.div`
  .navbar {
    background-color: #ffffff;
    box-shadow: 0 2px whitesmoke;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #000;

    &:hover {
      color: black;
      font-weight: bold;
      text-decoration: none;
    }
  }
`;

export const NavigationBar = () => {
  var pathBase = "/PersonalWebsite/";

  return (
    <Styles>
      <Navbar fixed="top" expand="lg">
        <Navbar.Brand href={pathBase}>Brent Samuels</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href={routes.HOME}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={routes.ABOUT}>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={routes.WORK}>Work</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={routes.RESEARCH}>Research</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
            <Nav.Link>
              <Link to={routes.PERSONAL}>Personal</Link>
            </Nav.Link>
          </Nav.Item> */}
            <Nav.Item>
              <Nav.Link href={routes.CONTACT}>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};
