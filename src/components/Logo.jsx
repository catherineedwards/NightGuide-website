import React, { Component } from "react";
import "../index.css";

class Logo extends Component {
  render() {
    return (
      <div className="logoContainer">
        <img
          className="logo"
          alt="Logo for the Night Guide team, which has an owl flying under planets in the sky"
          src={process.env.PUBLIC_URL + "logosvg.svg"}
        />
      </div>
    );
  }
}
export default Logo;
