import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
const WelcomeMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${(props) => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 500;
    letter-spacing: 7px;
    z-index: 2;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const CarouselMessageComponent = () => {
  return (
    <WelcomeMessage>
      <div className="titleMessage">
        <div className="heading">
          <div className="main text-center mb-3">
            Hello!
            <br />
            I'm
            <br />
            <span>
              <strong>Sri Priyanka Kommalapati</strong>
            </span>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: [
                  "Front End Developer",
                  "Masters Graduate",
                  "Sudoku Lover",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </div>
        </div>
      </div>
    </WelcomeMessage>
  );
};
export default CarouselMessageComponent;
