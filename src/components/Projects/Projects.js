import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
// import Certisure from "../../Assets/Projects/Certisure.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row>
          <Col md={6}>
            <ProjectCard
              imgPath="/website_project_animation.gif"
              isBlog={false}
              title="VideoTube"
              description="A responsive YouTube clone built with React, Redux Toolkit featuring real-time search suggestions using YouTube Data APIs,YouTube functionality with a clean"
              ghLink="https://github.com/omjaiswal45/VideoTube"
              demoLink="https://video-tube-orpin.vercel.app/"
            />
          </Col>

          <Col md={6}>
            <ProjectCard
               imgPath="/certisure.gif"
              isBlog={false}
              title="Certisure"
              description="CertiSure is a robust and secure platform designed to streamline certificate generation and verification lightning-Fast Certificate Generation"
              ghLink="https://github.com/omjaiswal45/CertiSure"
              demoLink="https://certisure.vercel.app/"
            />
          </Col>

          <Col md={6}>
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ProjectPilot "
              description="Effortlessly handle personal projects, delegate tasks to team members, and track progress."
              ghLink="https://github.com/omjaiswal45/ProjectPilot"
              demoLink=""
            />
          </Col>

          <Col md={6}>
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="securepost"
              description="SecureAuthPost is a modern web application featuring robust user authentication and secure content sharing"
              ghLink="https://github.com/omjaiswal45/secure-auth-post-app"
              demoLink=""
            />
          </Col>

          <Col md={6}>
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="PingSync"
              description="Talko is a real-time chat application that enables users to connect instantly through seamless, secure messaging. With fast communication, clean UI, and reliable socket-based interaction, Talko brings conversations to life"
              ghLink="https://github.com/omjaiswal45/mern-chat-app"
              demoLink=""
            />
          </Col>

          <Col md={6}>
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title=" Crudify"
              description="Crudify is a full-stack web application that allows users to Create, Read, Update, and Delete data seamlessly. Built with efficiency and scalability in mind, it offers a smooth user interface and powerful backend"
              ghLink="https://github.com/omjaiswal45/CRUD"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
