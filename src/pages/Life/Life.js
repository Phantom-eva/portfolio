import { Container, Row, Col } from "react-bootstrap";
import "./Life.css";

function Life() {
  return (
    <Container>
      <h1>Photo</h1>
      <Container>
        <Row>
          <Col md={4}>
            <h2>Photo 1</h2>
          </Col>
          <Col md={4}>
            <h2>Photo 2</h2>
          </Col>
          <Col md={4}>
            <h2>Photo 3</h2>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Life;
