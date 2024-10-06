import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
 
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Olá a todos, eu sou <span className="purple">Giovanne Zaniboni </span>
            de <span className="purple"> São Paulo, Brasil.</span>
            <br />
            Atualmente estudo Engenharia de Software na instituição FIAP.
            <br />
            Em progresso de graduaçao e em busca de cargo profissional.
            <br />
            <br />
            Além das responsabilidades, algumas outras atividades que adoro fazer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar jogos online
            </li>
            <li className="about-activity">
              <ImPointRight /> Ler livros
            </li>
            <li className="about-activity">
              <ImPointRight /> Escrever historias e escutar musicas
            </li>
          </ul>
 
          <p style={{ color: "rgb(155 126 172)" }}>
            "Eu faço perguntas porque não gosto da minha própria ignorância."{" "}
          </p>
          <footer className="blockquote-footer">Edward Elric</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
 
export default AboutCard;