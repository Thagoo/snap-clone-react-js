import React, { Component } from "react";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";
import "./Background.css";
import Footer from "../Footer/Footer";
import IconHeroDesktop from "../../images/image-hero-desktop.png";
import IconHeroMobile from "../../images/image-hero-mobile.png";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";

class Background extends Component {
  render() {
    return (
      <Container className="container">
        <MediaQuery minWidth={1250}>
          <img className="hero-icon" src={IconHeroDesktop}></img>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <img className="hero-icon" src={IconHeroMobile}></img>
        </MediaQuery>
        <div className="icon-container">
          <MediaQuery minWidth={1250}>
            <h1 className="heading fw-bold">
              <br />
              <br />
              Make
              <br />
              remote work
              <br />
            </h1>
          </MediaQuery>
          <MediaQuery maxWidth={768}>
            <h1 className="heading fw-bold">Make remote work</h1>
          </MediaQuery>
          <p className="lines">
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
