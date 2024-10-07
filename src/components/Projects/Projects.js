import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Vinho from "../../Assets/Projects/Vinho.jpg";
import Python from "../../Assets/Projects/python.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meu trabalho <strong className="purple">recentes </strong>
        </h1>
        <p style={{ color: "white" }}>
        Aqui estão alguns projetos em que trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Vinho}
              isBlog={false}
              title="Vinharia"
              description="Esse foi um projeto para minha aula de WebDev onde teriamos que fazer um site introdutório para uma adega de vinhos."
              ghLink="https://github.com/GiovanneZaniboni/JS_Vinharia"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Python}
              isBlog={false}
              title="Estudo de Python"
              description="Esse projeto foi feito para um estudo que eu estava fazendo sobre logica e programação em python, ele não esta completo, por que eu começei outro projeto melhor."
              ghLink="https://github.com/GiovanneZaniboni/Estudo-de-Python"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
