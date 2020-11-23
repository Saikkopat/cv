import { React, Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./css/PreviousWorks.css";
import Phone from "./images/phone-slash-solid.svg";
import Chat from "./images/comment-slash-solid.svg";

class PreviousWorks extends Component {
  render() {
    return (
      <div id="pre-exp">
        <Container fluid>
          <Row>
            <Col>
              <img src={Phone} className="svgIcon" alt="Phone svg icon" />
            </Col>
            <Col>
              <h1>I hate my previous works.</h1>
              <p>
                Sit amet luctus venenatis lectus magna fringilla urna porttitor.
                Laoreet sit amet cursus sit amet dictum. Nec ultrices dui sapien
                eget mi proin sed libero enim. Vitae aliquet nec ullamcorper sit
                amet risus nullam eget felis.
              </p>
            </Col>
            <Col>
              <img src={Chat} className="svgIcon" alt="Chat svg icon" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PreviousWorks;
