import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const HomeBottom = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <b className="purple"> Profile Summary </b>
              <br />
              <p>
                <li>
                  Java Developer with 2+ years of experience in enterprise web
                  and client/server applications.
                </li>
                <li>
                  Proficient in Java 8, Spring Boot, Spring JPA, Hibernate, and
                  RESTful API development.
                </li>
                <li>
                  Experienced in creating and maintaining backend infrastructure
                  using Java technologies.
                </li>
              </p>
              <b className="purple"> Strengths and Interests </b>
              <br />
              <p>
                <li>Quick learner, team player, and problem solver.</li>
                <li>
                  Personal interests include chess, cricket, and bike riding.
                </li>
              </p>
              <b className="purple"> Technical Skills </b>
              <br />
              <p>
                <li>
                  Strong skills in Java 8, Hibernate, Spring Boot, Spring JPA,
                  RESTful API, and Git.
                </li>
                <li>
                  Experienced in development tools like Intellij, pgAdmin 4,
                  GitHub, and Postman.
                </li>
              </p>
            </p>
          </Col>
          <Col md={3} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Devidas-Kaware"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/devidas-kaware-8ba772168/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HomeBottom;
