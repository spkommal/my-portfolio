import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./ExperienceStyles.css";
import TCS from "../../assets/img/experience/TCS.svg";
import CRAWFORD from "../../assets/img/experience/crawford.svg";
const ExperienceComponent = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center exp__title-font pb-3">EXPERIENCE</h1>
      <Jumbotron className="experience__jumbotron">
        <Container>
          <Tilt options={{ max: 15 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="experience__logo"
                  src={CRAWFORD}
                  alt="Crawford logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center">
                    <strong className="body__title-font">
                      CSR & Developer
                    </strong>
                    <br />
                    <strong>Location :</strong> Waterloo, Canada
                    <br />
                    <strong>Duration :</strong> Nov-2019 to Present
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Developed &amp; enhanced</strong> multiple
                        features with customizability option across web
                        application.
                      </li>
                      <li>
                        <strong>Developed</strong> automation system to create
                        SQL bulk query scripts that increased efficiency by 80%
                        and decreased working hours from 4 hours to 30 mins per
                        task.
                      </li>
                      <li>
                        <strong>Provided</strong> application maintenance while
                        working as `Production Support`.
                      </li>
                      <li>
                        <strong>Performed</strong> CRUD operations on multiple
                        databases to load/ remove data according to the business
                        requirements.
                      </li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="experience__logo"
                  src={TCS}
                  alt="TCS logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center">
                    <strong className="body__title-font">
                      Front End Developer
                    </strong>
                    <br />
                    <strong>Location :</strong> Hyderabad, India
                    <br />
                    <strong>Duration :</strong> Feb-2016 to Oct-2019
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Developed &amp; enhanced</strong> multiple
                        features with customizability option across web
                        application.
                      </li>
                      <li>
                        <strong>Developed</strong> automation system to create
                        SQL bulk query scripts that increased efficiency by 80%
                        and decreased working hours from 4 hours to 30 mins per
                        task.
                      </li>
                      <li>
                        <strong>Provided</strong> application maintenance while
                        working as `Production Support`.
                      </li>
                      <li>
                        <strong>Performed</strong> CRUD operations on multiple
                        databases to load/ remove data according to the business
                        requirements.
                      </li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default ExperienceComponent;
