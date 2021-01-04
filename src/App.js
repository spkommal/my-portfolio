import "./App.css";
import { Parallax } from "react-parallax";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import ParallaxImg from "./assets/img/parallex/background.webp";
import CarouselComponent from "./Components/Carousel/CarouselComponent";
import CarouselMessageComponent from "./Components/CarouselMessage/CarouselMessageComponent";
import NavBarComponent from "./Components/Navbar/NavBarComponent";
import AboutMeComponent from "./LandingPages/About/AboutMeComponent";
import SkillComponent from "./LandingPages/Skills/SkillsComponent";
import ExperienceComponent from "./LandingPages/Experience/ExperienceComponent";
import TimeLineComponent from "./Components/TimeLine/TimeLineComponent";
import ContactComponent from "./LandingPages/Contact/ContactComponent";
import FooterComponent from "./Components/Footer/FooterComponent";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <NavBarComponent />
      <CarouselComponent />
      <CarouselMessageComponent />

      <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage={ParallaxImg}
        bgImageAlt="About Me Background"
        strength={-200}
      >
        <Container className="container__border rounded">
          <Slide duration={500}>
            <AboutMeComponent />
          </Slide>
        </Container>
      </Parallax>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <SkillComponent />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Slide duration={500}>
          <hr />
          <ExperienceComponent />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLineComponent />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <ContactComponent />
        </Slide>
      </Container>
      <div>
        <hr />
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
