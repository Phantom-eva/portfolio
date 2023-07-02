import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import img442 from "../../Assets/img/442.jpg";
import img542 from "../../Assets/img/542.png";
import img545 from "../../Assets/img/545.png";
import img592 from "../../Assets/img/592.png";
import img618 from "../../Assets/img/618.png";
import imgweb from "../../Assets/img/website.png";
import pdf442 from "../../Assets/pdf/442_Final_Report.pdf";
import pdf542 from "../../Assets/pdf/542_Final_Report.pdf";
import pdf545 from "../../Assets/pdf/545_Final_Report.pdf";
import pdf592 from "../../Assets/pdf/592_Final_Report.pdf";
import pdf618 from "../../Assets/pdf/618_Final_Report.pdf";
import "./Project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">My Recent Works</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img442}
              title="Image Inpainting Using GAN, Partial Convolution and Region Normalization"
              description="We proposed a network that combines conditional GAN, Partial Convolution, and Region Normalization dealing with image inpainting tasks. Our model outperforms the baseline model both qualitatively and quantitatively."
              ghLink="https://github.com/Phantom-eva/image_inpainting"
              pdfLink={pdf442}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img542}
              title="Reimplementation of Swin Transformer"
              description="We mainly investigate the trending computer vision network Swin transformer and its variants.We evaluated our models with an image classification task as well as a downstream classification task on a private LCD screen defect dataset."
              ghLink="https://github.com/Phantom-eva/swintransformer"
              pdfLink={pdf542}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img545}
              title="Multiplayer Gobang Based on Reinforcement Learning"
              description="We proposed a multiplayer (more than two players) Gobang agent based on modified Alpha MCTS consists of transformer blocks implemented with Attention mechanism. We also  compared the performance of each architecture."
              ghLink="https://github.com/Phantom-eva/AlphaZero_Gobang_3player"
              pdfLink={pdf545}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img592}
              title="Exploration and Agent Improvement under Near-Real Market Environments Simulation Using DRL"
              description="We simulated the market trading environments in the real world and applied several popular deep reinforcement learning (DRL) algorithms to trade multiple stocks. We also analyzed various factors that affect the trading environments and evaluated the profitability of different agents."
              ghLink="https://github.com/Phantom-eva/FinRL"
              pdfLink={pdf592}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img618}
              title="Examining the Relationship between Poverty and Gun Violence in the United States"
              description="Our proposed project is analyzing the relationship between poverty and gun violence at the national and state levels, and developing evidence-based policy recommendations to address poverty and gun violence."
              ghLink="https://github.com/Phantom-eva/gun_violence"
              pdfLink={pdf618}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgweb}
              title="Personal website built with React.js, Email.js, and Bootstrap"
              description="We use react.js, email.js, typed.js, react-bootstrap to build a templated personal website, providing Multi-Page Layout, and a fully interactive interface."
              ghLink="https://github.com/Phantom-eva/portfolio"
              pdfLink="https://yilinli-um.com/portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
