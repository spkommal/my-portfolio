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
                    <ul className="text-left">
                      <li>
                        Built a software using <strong>Python-Selenium </strong>
                        that automates the extraction of invoice reports.
                      </li>
                      <li>
                        Developed a software using
                        <strong> Python XML API</strong> and
                        <strong> SQL</strong>. The software handles the parsing
                        of XML files and transfers large chunks of data from
                        parsed files to appropriate SQL tables governed by the
                        business rules.
                      </li>
                      <li>
                        The number of reports that can be audited increased from
                        5 per hour to 60 per hour using the tool.
                      </li>
                      <li>
                        As a CSR, receive in-bound calls and document the loss
                        details of auto and property insurance claims for
                        multiple insurance clients.
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
                        Developed a web application, used by Orthodontists from
                        scratch using
                        <strong> React JS, Redux, JavaScript </strong>
                        and made the application compatible and error free in
                        all the devices and browsers by writing high quality
                        code.
                      </li>
                      <li>
                        Worked with Agile team and migrated a legacy web
                        application to a brand-new design using
                        <strong> JavaScript, HTML5, CSS3 and Bootstrap </strong>
                        while ensuring the backward compatibility.
                      </li>
                      Improved the performance of home page that displays large
                      amount of data in tables by implementing conditional
                      rendering and lazy loading using React. The loading time
                      was reduced by 80%.
                      <li>
                        Developed highly reusable Web Components using React and
                        re-used the components to develop around 150+ static
                        websites for automobile dealers and increased the
                        traffic to promotion pages between 60% – 80 %.
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
