import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./AboutMeStyles.css";
const AboutMeComponent = function () {
  return (
    <div id="about">
      <div className="aboutMe">
        <h1 className="pt-3 text-center pb-3 aboutMe__title-font">
          {" "}
          ABOUT ME{" "}
        </h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  src="holder.js/171x180"
                  alt="profile picture"
                  className="aboutMe__profilePicture justify-content-end"
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 aboutMe__description rounded">
                Hello there! I am <strong>&nbsp;Sri Priyanka</strong>
                A Front End Developer with around 4 years of industry experience
                in building responsive Web Applications for different platforms.
                <br />
                I specialize in building web applications using modern
                JavaScript-ES6+ and have professional experience in building web
                applications using HTML5, CSS3, jQuery, BootStrap, React JS,
                Redux.
                <br />
                I have Graduated from University of Waterloo with a Masters
                Degress in Managament Sciences and Data Analytics.
                <br />
                Write about me
                <br />
                Write ABout me
                <br />
                Write about me <br />
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
                    <a href="#home" target="_blank" rel="noopener noreferrer">
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
