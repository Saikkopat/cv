import { React, Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GitLab from "./images/gitlab-brands.svg";
import Github from "./images/github-square-brands.svg";
import Telegram from "./images/telegram-brands.svg";
import Twitter from "./images/twitter-square-brands.svg";
import Email from "./images/envelope-square-solid.svg";
import WhatsApp from "./images/whatsapp-square-brands.svg";
import Button from "react-bootstrap/Button";
import "./css/ContactMe.css";

class ContactMe extends Component {
  render() {
    return (
      <div id="contact-me">
        <Container fluid>
          <Row>
            <Col>
              <h1>Contact Me</h1>
              <p>... and maybe i'll answer you!</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>GitLab</h3>
              <img src={GitLab} className="svgIcon" alt="gitab svg icon" />
              <Button variant="danger">
                {" "}
                <a
                  href="https://gitlab.com/saikkopat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find me on GitLab
                </a>
              </Button>
            </Col>
            <Col>
              <h3>GitHub</h3>
              <img src={Github} className="svgIcon" alt="gtihub svg icon" />
              <Button variant="danger">
                {" "}
                <a
                  href="https://github.com/Saikkopat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  or GitHub
                </a>
              </Button>
            </Col>
            <Col>
              <h3>Telegram</h3>
              <img src={Telegram} className="svgIcon" alt="telegram svg icon" />
              <Button variant="danger">
                {" "}
                <a
                  href="https://t.me/Saikkopat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  or Telegram
                </a>
              </Button>
            </Col>
            <Col>
              <h3>Email</h3>
              <img src={Email} className="svgIcon" alt="email svg icon" />
              <Button variant="danger">
                {" "}
                <a
                  href="mailto:maskemaneac@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  or Email Me
                </a>
              </Button>
            </Col>
            <Col>
              <h3>Twitter</h3>
              <img src={Twitter} className="svgIcon" alt="twitter svg icon" />
              <Button variant="danger">
                {" "}
                <a
                  href="https://twitter.com/FlareRage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  or check my Twitter
                </a>
              </Button>
            </Col>
            <Col>
              <h3>WhatsApp</h3>
              <img src={WhatsApp} className="svgIcon" alt="WhatsApp svg icon" />
              <Button variant="danger">
                {" "}
                <a
                  href="https://wa.me/525584869907"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  or spam me on WhatsApp
                </a>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ContactMe;
