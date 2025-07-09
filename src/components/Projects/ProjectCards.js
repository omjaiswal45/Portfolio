import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card
      className="shadow-lg border-0 mb-4 d-flex flex-md-row flex-column"
      style={{
        borderRadius: "16px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.01)";
        e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
      }}
    >
      {/* Image Section */}
      <div
        style={{
          flex: "1 1 50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f8f9fa", // Optional: contrast for light images
        }}
      >
        <Card.Img
          src={props.imgPath}
          alt="project"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain", // ✅ prevents image cutting
            padding: "10px",
            minHeight: "250px",
          }}
        />
      </div>

      {/* Text Content Section */}
      <Card.Body
        style={{
          flex: "1 1 50%",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Card.Title style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
            {props.title}
          </Card.Title>
          <Card.Text style={{ margin: "15px 0", textAlign: "justify", color: "#333" }}>
            {props.description}
          </Card.Text>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="dark" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;{props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {!props.isBlog && props.demoLink && (
            <Button variant="info" href={props.demoLink} target="_blank">
              <CgWebsite /> &nbsp;Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
