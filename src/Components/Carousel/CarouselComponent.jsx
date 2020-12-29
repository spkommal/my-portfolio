import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ScrollDownArrowComponent from "../ScrollDownArrow/ScrollDownArrowComponent";
import "./CarouselStyle.css";
import Slide1 from "../../../src/assets/img/carousel/slide1.webp";
import Slide2 from "../../../src/assets/img/carousel/slide2.webp";
import Slide3 from "../../../src/assets/img/carousel/slide3.webp";

const CarouselComponent = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={1500} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide2}
            alt="Seecond slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <ScrollDownArrowComponent />
    </div>
  );
};

export default CarouselComponent;
