import React, { Component } from "react";
import "./Background.css";
import Footer from "../Footer/Footer";
import IconHero from "../../images/image-hero-desktop.png";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";

class Background extends Component {
  render() {
    return (
      <Container className="container">
        <img className="hero-icon" src={IconHero}></img>
        <div className="icon-container">
          <h1 className="heading fw-bold">
            <br />
            <br />
            Make
            <br />
            remote work
            <br />
          </h1>

          <p>
            <br />
            Get yout team in sync, no matter location.<br></br> Streamline
            process, create team rituals and<br></br>watch productivity soar
            <br />
            <br />
          </p>
        </div>

        <Footer />
      </Container>
    );
  }
}
export default Background;
