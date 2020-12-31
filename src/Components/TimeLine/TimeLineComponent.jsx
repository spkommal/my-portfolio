import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "./TimeLine.css";
import FORKIFY from "../../assets/img/projects/forkify.webp";
import MAPTY from "../../assets/img/projects/mapty.webp";
import PIGGAME from "../../assets/img/projects/piggame.webp";
const TimeLineComponent = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center timeLine__title-font pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          <ImageEvent
            date="Oct-2020"
            className="text-center"
            text="Forkify - A Recipe Search App"
            src={FORKIFY}
            alt="Forkify - A Recipe Search App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An application designed to
                        search and create recipes from API using
                        JavaScript(latest ES6), HTML5
                        <hr />
                        <strong>Features:</strong>
                        <ul className="features__list-style pt-1">
                          <li>
                            Search for recipes using keywords from a list of
                            over 1,000,000 recipes.
                          </li>
                          <li>
                            Get the right amount of ingredients by increasing or
                            decreasing the servings.
                          </li>
                          <li>
                            Bookmark your favorite recipe to access all the
                            time.
                          </li>
                          <li>Create your own recipe and save it.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">HTML5</span>
                          </li>
                          <li>
                            <span className="p-2">CSS3</span>
                          </li>
                          <li>
                            <span className="p-2">JavaScript(ES6+)</span>
                          </li>
                          <li>
                            <span className="p-2">MVC Architecture</span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://forkify-sri-priyanka.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/spkommal/forkify-app"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          <ImageEvent
            date="Oct-2020"
            className="text-center"
            text="Mapty - Outdoor Exercise Tracker"
            src={MAPTY}
            alt="Mapty - Outdoor Exercise Tracker"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An application designed to
                        save the outdoor activities and mark them on map.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="features__list-style pt-1">
                          <li>
                            Save your outdoor activities like walking or cycling
                            in the application by marking them on map.
                          </li>
                          <li>Get a detailed list of your workouts.</li>
                          <li>See all the workouts marked on the map.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">HTML5</span>
                          </li>
                          <li>
                            <span className="p-2">CSS3</span>
                          </li>
                          <li>
                            <span className="p-2">JavaScript(ES6+)</span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://mapty-spkommal.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/spkommal/mapty-app"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          <ImageEvent
            date="Oct-2020"
            className="text-center"
            text="PIG GAME - A simple fun game"
            src={PIGGAME}
            alt="PIG GAME - A simple fun game"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A fun 2 player game that
                        is designed using JavaScript.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="features__list-style pt-1">
                          <li>
                            2 Players can play this game. Roll the dice and hold
                            the score. The first player to reach 100 wins. Score
                            sets to 0 when 1 is rolled.
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">HTML5</span>
                          </li>
                          <li>
                            <span className="p-2">CSS3</span>
                          </li>
                          <li>
                            <span className="p-2">JavaScript(ES6+)</span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://spkommal-pig-game.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/spkommal/pig-game"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};
export default TimeLineComponent;
