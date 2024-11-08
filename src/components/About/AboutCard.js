import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anmol Chaudhary </span>
            from <span className="purple"> Dehradun, India.</span>
            <br />
            I am currently employed as a Teaching Associate at Graphic Era Deemed To Be University, Dehradun 
            & a full-time M.Tech Scholar.
            <br />
            I have completed my Master of Computer Applications (MCA) in 2021 from GEU, Dehradun.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight />  Strength training with a keen interest in learning Combat Skills.
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strength isn’t just built in the body. it’s cultivated in the mind !"{" "}
          </p>
          <footer className="blockquote-footer">Anmol Chaudhary</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
