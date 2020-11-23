import React, { Component } from "react";
import {Navbar, Nav } from 'react-bootstrap';
import RedLanternIcon from "./images/favicon.ico";
class MyNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" position="fixed">
        <Navbar.Brand href="#home">A <img src={RedLanternIcon} width="30" heigt="30" alt="Red Lanter Corps icon"/> Cardenas</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about-me">About me</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#pre-exp">Previous works</Nav.Link>
            <Nav.Link href="#proyects">Proyects</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#contact">Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavbar;
