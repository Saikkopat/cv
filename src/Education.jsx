import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import "./css/Education.css";
import VocationalSchool from "./images/vocationalschool.png";
import HigherSchool from "./images/higherschool.png";
class Education extends Component {
  render() {
    return (
      <div id="education">
        <h1 className="eduTitle">Education</h1>
        <Container>
          <Row>
            <Col>
              <Card bg={"dark"} text={"light"} className="eduCard">
                <Card.Header>Vocational School</Card.Header>
                <Card.Body>
                  <Card.Title>Technical Programmer</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Interdum posuere lorem ipsum dolor sit amet.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
                <img className="firstSchool pictureSchool" src={VocationalSchool} alt="A logo"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card bg={"dark"} text={"light"} className="eduCard">
                <Card.Header>Higher Education</Card.Header>
                <Card.Body>
                  <Card.Title>Computational Systems Engineer</Card.Title>
                  <Card.Subtitle>incomplete</Card.Subtitle>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Interdum posuere lorem ipsum dolor sit amet.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <img className="secondSchool pictureSchool" src={HigherSchool} alt="Another logo"/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Education;
