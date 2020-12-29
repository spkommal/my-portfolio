import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../../src/assets/icons/SP.png";
import "./NavBarStyle.css";

const NavBarComponent = () => {
  return (
    <>
      <Navbar
        fixed="top"
        expand="lg"
        variant="dark"
        bg="dark"
        className="nav__animate nav__theme nav__content-justify"
      >
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo avatar" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default NavBarComponent;
