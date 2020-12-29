import "./App.css";
import CarouselComponent from "./Components/Carousel/CarouselComponent";
import CarouselMessageComponent from "./Components/CarouselMessage/CarouselMessageComponent";
import NavBarComponent from "./Components/Navbar/NavBarComponent";

function App() {
  return (
    <div>
      <NavBarComponent />
      <CarouselComponent />
      <CarouselMessageComponent />
    </div>
  );
}

export default App;
