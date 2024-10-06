import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
 
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            DEIXE <span className="purple"> ME </span> APRESENTAR
            </h1>
            <p className="home-about-body">
            Profissional em desenvolvimento e apaixonado pela area de programação, com 3 anos de estudo na área.
              <br />
              <br /> tenho conhecimento em front-end e linguagens Back-end como
              <i>
                <b className="purple"> Python, Java e Javascript. </b>
              </i>
              <br />
              <br />
              Meus campos de interesse estão construindo novos &nbsp;
              <i>
                <b className="purple">Tecnologias e produtos da Web </b> e
                também em áreas relacionadas{" "}
                <b className="purple">
                cybersecurity.
                </b>
              </i>
              <br />
              <br />
              Sempre que possível aplico também minha paixão pelo desenvolvimento de produtos
              com <b className="purple">Node.js</b> e
              <i>
                <b className="purple">
                  {" "}
                  Biblioteca em Javascript e Frameworks
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCONTRE-ME EM</h1>
            <p>
            Sinta-se à vontade para <span className="purple"> se conectar </span> comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/GiovanneZaniboni"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://bsky.app/profile/kiryar.bsky.social"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/giovanne-zaniboni-1468142aa/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/suyg_io/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;