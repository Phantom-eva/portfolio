import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Yilin Li</strong>
              </h1>
            </Col>
          </Row>
        </Container>
        <h1>Skill Summary</h1>
        <Container>
          <Row>
            <Col md={4}>Skill</Col>
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
