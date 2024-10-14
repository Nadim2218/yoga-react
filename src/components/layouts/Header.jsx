import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import Buttons from "../Buttons";

const Header = () => {
  return (
    <Navbar expand="lg" className=" fixed-top">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto my-2 my-lg-0">
            <Nav.Link as={NavLink} to="/" exact activeClassName="active">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" activeClassName="active">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/sessions" activeClassName="active">
              Sessions
            </Nav.Link>
            <Nav.Link as={NavLink} to="/why" activeClassName="active">
              Why
            </Nav.Link>
          </Nav>
          <div className="d-flex gap-4 align-items-center">
            <CiSearch className="search" />
            <CiGlobe className="globeicon" />
            <select className="language-select" name="" id="">
              <option className="option-lang" value="">IN</option>
              <option className="option-lang" value="">HN</option>
              <option className="option-lang" value="">EN</option>
            </select>
            <Buttons buttontext="Sign Up" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
