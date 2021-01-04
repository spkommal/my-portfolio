import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./ContactStyles.css";
function ContactComponent() {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center contactMe__title-font pb-3">
        CONTACT ME
      </h1>
      <Jumbotron className="contact__jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a
                href="mailto:sripriyanka976@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-danger"
                  title="sripriyanka976@gmail.com"
                >
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.linkedin.com/in/sri-priyanka-kommalapati/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-primary"
                  title="Visit my LinkenIn Profile"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://github.com/spkommal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.instagram.com/isripriyanka/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-danger" title="Follow me">
                  <i className="fab fa-instagram-square"></i> Instagram
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}

export default ContactComponent;
