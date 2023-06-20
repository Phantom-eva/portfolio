import { Container, Row, Col } from "react-bootstrap";
import "./Life.css";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";

function Life() {
  return (
    <Container className="life">
      <Container className="life-header">Photo</Container>
      <Container>
        <Row>
          <Col md={4}>
            <Container className="photo">
              <h2>Photo 1</h2>
              <img src={img1} className="photo-detail" />
            </Container>
          </Col>
          <Col md={4}>
            <Container className="photo">
              <h2>Photo 2</h2>
              <img src={img2} className="photo-detail" />
            </Container>
          </Col>
          <Col md={4}>
            <Container className="photo">
              <h2>Photo 3</h2>
              <img src={img3} className="photo-detail" />
            </Container>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Container className="photo">
              <h2>Photo 4</h2>
              <img src={img4} className="photo-detail" />
            </Container>
          </Col>
          <Col md={4}>
            <Container className="photo">
              <h2>Photo 5</h2>
              <img src={img5} className="photo-detail" />
            </Container>
          </Col>
          <Col md={4}>
            <Container className="photo">
              <h2>Photo 6</h2>
              <img src={img6} className="photo-detail" />
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Life;
