import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import port from "../../Assets/Projects/port.png";
import food from "../../Assets/Projects/food.png";
import sort from "../../Assets/Projects/sort.png";
import chatbudy from "../../Assets/Projects/chatbudy.png";
import ai from "../../Assets/Projects/ai.png";
// import suicide from "../../Assets/Projects/suicide.png";
import grocery from "../../Assets/Projects/grocery.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ai}
              isBlog={false}
              title="AI-Powered 3D Immersion"
              description="Developed a feature-rich 3d model customizer using AI."
              ghLink="https://github.com/piyushpatil2002/AI_3D_Project"
              demoLink="https://ai-powered-3d-immersion.netlify.app/"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbudy}
              isBlog={false}
              title="Chat-Buddy"
              description="Developed a feature-rich chat application using React and Firebase."
              ghLink="https://github.com/piyushpatil2002/Chat_APP_ChatBuddy"
              demoLink="https://chatbuddy-pp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grocery}
              isBlog={false}
              title="Inventory Management System"
              description="A grocery management system is a web-based solution designed to streamline operations for grocery stores and supermarkets."
              ghLink="https://github.com/piyushpatil2002/Supershop.github.io"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sort}
              isBlog={false}
              title="Sorting Visualizer"
              description="A web-based tool that demonstrates various sorting 
                          algorithms through visual animations, helping users 
                          understand how data is sorted efficiently"
              ghLink="https://github.com/piyushpatil2002/Sorting_Visualizer"
              demoLink="https://sortingvisualizerdsa.netlify.app/"              
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Online food delivery"
              description="The Online Food Ordering project is a web application 
                          designed to simplify the process of ordering food online 
                          from various restaurants and delivering it to the customers' doorsteps. "
              ghLink="https://github.com/piyushpatil2002/FoodyVille.github.io"
              demoLink="https://piyushpatil2002.github.io/FoodyVille.github.io/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="Personal Portfolio"
              description="A personal portfolio website showcasing my academic achievements, projects, and skills 
                          as a student to demonstrate my capabilities and attract opportunities for internships or academic collaborations. "
              // ghLink="https://github.com/piyushpatil2002/FoodyVille.github.io"
              demoLink="https://piyush1portfolio.netlify.app/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
