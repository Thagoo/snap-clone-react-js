import React from "react";
import "./Footer.css";
import audiophile from "../../images/client-audiophile.svg";
import databiz from "../../images/client-databiz.svg";
import maker from "../../images/client-maker.svg";
import meet from "../../images/client-meet.svg";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <a
          className="btn btn-dark"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        >
          Learn More
        </a>

        <footer className="footer-icons">
          <img src={databiz}></img>
          <img src={audiophile}></img>
          <img src={meet}></img>
          <img src={maker}></img>
        </footer>
      </div>
    );
  }
}

export default Footer;
