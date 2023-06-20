import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import img442 from "./img/442.jpg";
import img542 from "./img/542.png";
import img545 from "./img/545.png";
import img592 from "./img/592.png";
import "./Project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img442}
              isBlog={false}
              title="Image Inpainting Using GAN, Partial Convolution and Region Normalization"
              description="We proposed a network that combines CGAN, Partial Convolution, and Region Normalization dealing with image inpainting tasks. Our model outperforms the baseline model both qualitatively and quantitatively."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://yilinli-um.com/portfolio/project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img542}
              isBlog={false}
              title="Reimplementation of Swin Transformer"
              description="We mainly investigate the trending computer vision network Swin transformer and its variants.We evaluated our models with an image classification task as well as a downstream classification task on a private LCD screen defect dataset."
              ghLink="https://github.com/Phantom-eva/swintransformer"
              demoLink="https://yilinli-um.com/portfolio/project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img545}
              isBlog={false}
              title="Multiplayer Gobang Based on Reinforcement Learning"
              description="We proposed a multiplayer (more than two players) Gobang agent based on modified Alpha MCTS consists of transformer blocks implemented with Attention mechanism. We also  compared the performance of each architecture."
              ghLink="https://github.com/Phantom-eva/AlphaZero_Gobang_3player"
              demoLink="https://yilinli-um.com/portfolio/project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img592}
              isBlog={false}
              title="Exploration and Agent Improvement under Near-Real Market Environments Simulation Using DRL"
              description="We will do an investigation into some of the real-world common scenarios and extreme situations that may occur in the market. Then we will perform simplified simulations. (Not finished)"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://yilinli-um.com/portfolio/project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
