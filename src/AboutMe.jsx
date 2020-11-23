import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import profilePhoto from "./images/profile-photo.jpg";
import "./css/AboutMe.css";
class AboutMe extends Component {
  render() {
    return (
      <div id="about-me">
        <Container fluid>
          <Row>
            <Col sm={5}>
            <img src={profilePhoto} className="profilePhoto" alt="Angel Cardenas" />
            </Col>
            <Col sm={7}>
              <Jumbotron>
                <Container>
                    <h1>
                        About me
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutMe;
