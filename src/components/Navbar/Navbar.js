import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./logo.svg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// icons
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar as AiStar,
  AiOutlineHome as AiHome,
  AiOutlineFundProjectionScreen as AiProject,
  AiOutlineMail as AiContact,
} from "react-icons/ai";
import { CgFileDocument as CgFile } from "react-icons/cg";
import { MdNightlife as MdLife } from "react-icons/md";
// css file
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  const [expand, setExpand] = useState(false);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" sticky="top">
      <Container className="navborder">
        <Navbar.Brand href="/portfolio" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
          &nbsp;
          <div className="brand-content">Yilin (Michael) Li's website</div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            setExpand(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
                <AiHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => setExpand(false)}>
                <CgFile style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => setExpand(false)}
              >
                <AiProject style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/life" onClick={() => setExpand(false)}>
                <MdLife style={{ marginBottom: "2px" }} /> Life
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => setExpand(false)}
              >
                <AiContact style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Phantom-eva/portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em", color: "white" }} />{" "}
                <AiStar style={{ fontSize: "1.1em", color: "white" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
