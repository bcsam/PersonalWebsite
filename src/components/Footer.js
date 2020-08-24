import React from "react";
import { Navbar } from "react-bootstrap";
import styled from "styled-components";

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
      <Navbar.Brand href="/">Created by Brent Samuels</Navbar.Brand>
      {/* 
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse> */}
    </Navbar>
  </Styles>
);
