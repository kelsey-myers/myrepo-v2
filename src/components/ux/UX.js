import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Fade from "react-reveal";

import Environment from "./Environment";
import Patisserie from "./Patisserie";
import Beats from "./Beats";

import { CSSTransition } from "react-transition-group";

export default function Portfolio() {
  return (
    <div>
      <div id="projects">
        <Container className="projects-div padding-fit">
          <Fade>
            <Row className="p-3">
              <h1 className="secondary title ">
                Design
                <span className="title text-black inline ">Portfolio</span>
              </h1>
            </Row>
          </Fade>
        </Container>
      </div>
      <Container fluid className="align-items-center p-5 background-white">
        <Fade bottom>
          <Row className="project-div-2 mb-5 align-items-center" xs={1} sm={2}>
            <Col xs={{ order: "last" }} className="text-center">
              <Patisserie />
            </Col>
            <Col>
              <h4 className="bebas text-center"> Patisserie </h4>
              <br />
              <p className="lato text-center">
                A few artboards from a mockup designed for a bakery client. The
                brief was to provide a light and airy theme to the website, with
                strong inspiration from French patisseries.
              </p>
            </Col>
          </Row>

          <Row className="project-div-1 mb-5 align-items-center" xs={1} sm={2}>
            <Col
              xs={{ order: "last" }}
              sm={{ order: "first" }}
              className="text-center"
            >
              <Beats />
            </Col>
            <Col>
              <h4 className="bebas text-center"> Beats </h4>
              <br />
              <p className="lato text-center">
                A few artboards from a minimal shop theme designed by myself.
                This was made primarily for technology-oriented businesses. The
                landing page will be an autoplay video which displays the main
                product.
              </p>
            </Col>
          </Row>

          <Row className="project-div-2 mb-5 align-items-center" xs={1} sm={2}>
            <Col xs={{ order: "last" }} className="text-center">
              <Environment />
            </Col>
            <Col>
              <h4 className="bebas text-center"> Nature </h4>
              <br />
              <p className="lato text-center">
                A sample from a simple theme designed for environmental
                organisations. The inspiration here was nature, simplicity, and
                shades of green!
              </p>
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}
