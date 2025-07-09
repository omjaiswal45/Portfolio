import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import "./AboutCard.css"; // Make sure this CSS file is included

function AboutCard() {
  return (
    <div className="about-card-wrapper">
      <Card className="quote-card-view about-3d-card">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p className="about-text">
              Hi Everyone, I am{" "}
              <span className="highlight">Om Jaiswal</span> from{" "}
              <span className="highlight">Uttar Pradesh, India.</span>
              <br />
              <br />
              I am a <span className="sub-highlight">Full Stack Developer</span>{" "}
              passionate about building scalable and impactful web applications.
              <br />
              <br />
              🎓 I have recently completed my{" "}
              <span className="sub-highlight">
                B.Tech in Electrical Engineering
              </span>{" "}
              from Bundelkhand Institute of Engineering and Technology, Jhansi.
              <br />
              <br />
              💼 I worked as a{" "}
              <span className="sub-highlight">Software Developer Intern</span> at
              Car Wizard Pvt Ltd, where I created responsive UIs, added modern
              animations using Framer Motion, and optimized user flows using
              React and Tailwind CSS.
              <br />
              <br />
              Apart from coding, here are some activities I enjoy:
            </p>

            <ul className="about-list">
              <li className="about-activity">
                <ImPointRight className="about-icon" /> Playing Games
              </li>
              <li className="about-activity">
                <ImPointRight className="about-icon" /> Writing Tech Blogs
              </li>
              <li className="about-activity">
                <ImPointRight className="about-icon" /> Travelling
              </li>
            </ul>

            <p className="quote-text">
              "Strive to build things that make a difference!"
            </p>
            <footer className="blockquote-footer text-end mt-3">
              Om Jaiswal
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutCard;
