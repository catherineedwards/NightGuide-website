import React, { Component } from "react";
import "../index.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img
          className="footerleft"
          src={process.env.PUBLIC_URL + "footerleft.png"}
          styles={{ display: "flex", verticalAlign: "bottom" }}
        />
        <img
          className="footerright"
          styles={{ display: "flex", verticalAlign: "bottom" }}
          align="right"
          src={process.env.PUBLIC_URL + "footerright.png"}
        />
      </div>
    );
  }
}
export default Footer;
