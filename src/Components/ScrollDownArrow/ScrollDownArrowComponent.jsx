import React from "react";
import styled from "styled-components";

const MyScroll = styled.div`
  position: relative;
  z-index: 2;
  bottom: 1.6em;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: transparent;
  font-weight: 700px;
  text-shadow: 1px 1px #45a29e;
  color: #fff;
  .turn {
    cursor: pointer;
    transform: rotate(90deg);
  }
`;

const ScrollDownArrowComponent = () => {
  return (
    <MyScroll>
      <div className="turn">
        <span> &gt; </span>
      </div>
    </MyScroll>
  );
};

export default ScrollDownArrowComponent;
