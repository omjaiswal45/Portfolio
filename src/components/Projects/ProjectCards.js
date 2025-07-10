import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ imgPath, title, description, ghLink, demoLink, isBlog }) {
  return (
    <Card
      className="shadow-lg border-0 mb-4 d-flex flex-md-row flex-column"
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        color: "white",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.01)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
      }}
    >
      {/* Image Section */}
      <div
        style={{
          flex: "1 1 50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          minHeight: "250px",
        }}
      >
        <Card.Img
          src={imgPath}
          alt="project"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            padding: "10px",
            maxHeight: "300px",
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
          <Card.Title style={{ fontSize: "1.7rem", fontWeight: "bold", marginBottom: "15px" }}>
            {title}
          </Card.Title>
          <Card.Text style={{ color: "#f1f1f1", textAlign: "justify", marginBottom: "20px" }}>
            {description}
          </Card.Text>
        </div>
        <div style={{ display: "flex", gap: "1px", flexWrap: "wrap" }}>
          <Button
            variant="light"
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Link"
          >
            <BsGithub /> &nbsp;{isBlog ? "Blog" : "GitHub"}
          </Button>
          {!isBlog && demoLink && (
            <Button
              style={{ backgroundColor: "#ffffff", color: "#2575fc", border: "none" }}
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo Link"
            >
              <CgWebsite /> &nbsp;Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
