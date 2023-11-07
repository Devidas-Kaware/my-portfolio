import { Col, Container, Row } from "react-bootstrap";
import Particle from "../../common/Particle";
import Tilt from "react-parallax-tilt";
import laptopImg from "../../Assets/photo.png";
import AboutCard from "./AboutCard";
import Skills from "./Skills";

const About = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={3}
            style={{
              display: "flex",
              justifyContent: "center",
              //   alignItems: "center",
              overflow: "hidden",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
            className="about-img circular-image"
          >
            <Tilt>
              <img
                src={laptopImg}
                alt="about"
                className="img-fluid rounded-circle"
              />
            </Tilt>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Skills />
      </Container>
    </Container>
  );
};

export default About;
