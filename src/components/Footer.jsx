import React, { Component } from "react";
import "../index.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img
          className="footerleft"
          alt="A hill with trees on it"
          src={process.env.PUBLIC_URL + "footerleft.png"}
          styles={{ display: "flex", verticalAlign: "bottom" }}
        />
        <img
          className="footerright"
          alt="A hill with trees on it"
          styles={{ display: "flex", verticalAlign: "bottom" }}
          align="right"
          src={process.env.PUBLIC_URL + "footerright.png"}
        />
      </div>
    );
  }
}
export default Footer;
