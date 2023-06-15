import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import photo from "./photo.png";

function Home() {
  return (
    <section>
      <Container fluid className="home-section">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 className="heading">
                Hi There!
                <span>👋🏻</span>
                Welcomt to my website.
              </h1>
              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Yilin Li</strong>, a software
                developer.
              </h1>
            </Col>
            <Col md={4}>
              <img className="home-img" src={photo} alt="photo" />
            </Col>
          </Row>
        </Container>
        <h1>About me</h1>
        <Container>
          <Row>
            <Col md={4} className="home-about-section">
              <h2 className="home-about-body">
                My name is Yilin Li. I am an ECE master student at the
                University of Michigan - Ann Arbor. My specific track is
                computer vision area, and I'm also interested in machine
                learning and software development. Currently, I am actively
                looking for a full-time SDE job.
              </h2>
            </Col>
          </Row>
        </Container>
      </Container>
      <h1>Skill Summary</h1>
      <Container>
        <Row>
          <Col md={4}>Skill</Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
