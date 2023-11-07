import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Devidas Kaware </span>
            from <span className="purple"> Pune, India.</span>
            <br /> Java Developer with 2 years of experience in enterprise web
            and client/server applications. Proficient in Java 8, Spring Boot,
            Spring JPA, Hibernate, and RESTful API development. Experienced in
            creating and maintaining backend infrastructure using Java
            technologies.
            <br />
            Additionally, I am enthusiastic about Machine Learning.
            <br />
            <br />
            Some of my hobbies are
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Bike Riding
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
