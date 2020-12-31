import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./SkillStyles.css";
import { skillsData } from "./skillsData";

const SkillComponent = () => {
  return (
    <div id="skills">
      <div className="pt-3 pb-3">
        <h1 className="text-center skills__title-font pb-4">
          TECHNICAL SKILLS
        </h1>
        <CardDeck>
          <Row className="d-flex justify-content-around">
            {/* Frontend */}
            <Col md={4}>
              <Card className="skills__card-focus mt-2 mb-2">
                <Card.Body>
                  {/* Frontend */}
                  <Card.Title className="text-center skills__card-title">
                    Front-End Web Technologies
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skillsData.frontEnd.map((skill, index) => (
                      <span className="p-2" key={index}>
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="skill__icons m-1"
                        ></Image>
                        {skill.skillName}
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              {/* Backend */}
              <Card className="skills__card-focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center  skills__card-title">
                    Back-End Technologies
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skillsData.backEnd.map((skill, index) => (
                      <span className="p-2" key={index}>
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="skill__icons m-1"
                        ></Image>
                        {skill.skillName}
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Version Control */}

              <Card className="skills__card-focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center  skills__card-title">
                    Version Control
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skillsData.versionControl.map((skill, index) => (
                      <span className="p-2" key={index}>
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="skill__icons m-1"
                        ></Image>
                        {skill.skillName}
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
              {/* Database */}

              <Card className="skills__card-focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center  skills__card-title">
                    Database
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skillsData.database.map((skill, index) => (
                      <span className="p-2" key={index}>
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="skill__icons m-1"
                        ></Image>
                        {skill.skillName}
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* <Col md={4}>
            // IDE Editors
              <Card className="skills__card-focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center  skills__card-title">
                    IDE Editors
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skillsData.ideEditors.map((skill, index) => (
                      <span className="p-2" key={index}>
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="skill__icons m-1"
                        ></Image>
                        {skill.skillName}
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col> */}
            <Col md={4}>
              <Card className="skills__card-focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center  skills__card-title">
                    Programming Languages
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skillsData.programmingLanguages.map((skill, index) => (
                      <span className="p-2" key={index}>
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="skill__icons m-1"
                        ></Image>
                        {skill.skillName}
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="skills__card-focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center  skills__card-title">
                    Project Management
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skillsData.projectManagement.map((skill, index) => (
                      <span className="p-2" key={index}>
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="skill__icons m-1"
                        ></Image>
                        {skill.skillName}
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </CardDeck>
      </div>
    </div>
  );
};
export default SkillComponent;
