import React from "react";
import { Link } from "react-router-dom";
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
  return (
    <Styles>
      <Navbar fixed="top" expand="lg">
        <Navbar.Brand href={routes.HOME}>Brent Samuels</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link>
                <Link to={routes.HOME}>Home</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to={routes.ABOUT}>About</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to={routes.WORK}>Work</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to={routes.RESEARCH}>Research</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to={routes.CONTACT}>Contact</Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};


/*
    return (
      <Styles>
        <Navbar fixed="top" expand="lg">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">Brent Samuels</NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink classname="nav-link" to={routes.HOME}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink classname="nav-link" to={routes.ABOUT}>
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink classname="nav-link" to={routes.WORK}>
                    Work
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink classname="nav-link" to={routes.RESEARCH}>
                    Research
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink classname="nav-link" to={routes.CONTACT}>
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </Navbar>
      </Styles>
    );
*/