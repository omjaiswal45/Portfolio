import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              description="A responsive YouTube clone built with React, Redux Toolkit, and TailwindCSS, featuring real-time search suggestions and video playback using YouTube Data APIs."
              ghLink="https://github.com/omjaiswal45/VideoTube"
              demoLink="https://video-tube-orpin.vercel.app/"
            />
          </Col>

          <Col md={6}>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="A blog platform built with Next.js and Tailwind. Supports markdown writing with dark mode and live markdown rendering."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={6}>
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="An online code & markdown editor supporting HTML, CSS, JS and Markdown with instant preview, autosave, and GFM rendering."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={6}>
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="A plant disease classifier using PyTorch and ResNet34. Trained on a Kaggle dataset with 98% accuracy across 38 classes."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={6}>
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI For Social Good"
              description="NLP-based project to detect suicidal ideation in online text, aimed at early mental health intervention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={6}>
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Emotion Detection"
              description="Face recognition and emotion classification using OpenCV, Keras and TensorFlow trained on FER-2013 dataset."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
