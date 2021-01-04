import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import PROFILE from "../../assets/img/profile/profile.webp";
import "./AboutMeStyles.css";
const AboutMeComponent = function () {
  return (
    <div id="about">
      <div className="aboutMe">
        <h1 className="pt-3 text-center pb-3 aboutMe__title-font">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  src={PROFILE}
                  alt="profile picture"
                  className="aboutMe__profilePicture justify-content-end"
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 aboutMe__description rounded">
                <div className="pb-2">
                  Hello there! I am <strong>&nbsp;Sri Priyanka.</strong>
                </div>
                <div className="pb-2">
                  A Front End Developer with around 4 years of professional
                  experience in building responsive Web Applications for
                  different platforms and multiple devices.
                </div>
                <div className="pb-2">
                  I specialize in building Web Applications using technologies
                  like HTML5, CSS3, JavaScript(ES6+), ReactJS, Redux and NodeJS.
                </div>
                <div className="pb-2">
                  I've Graduated from University of Waterloo with a Masters
                  Degree in Management Sciences and a Graduate Diploma in Data
                  Analytics.
                </div>
                <div className="pb-2">
                  I spend my free time watching movies(or re-watching
                  F.R.I.E.N.D.S) and solving Sudoku puzzles.
                </div>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Contact Me
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1xuIkDqgJkZnXtVwLb5bkspy31x9702mk/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/spkommal"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/sri-priyanka-kommalapati/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutMeComponent;
