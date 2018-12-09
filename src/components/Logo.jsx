import React, { Component } from "react";
import "../index.css";

class Logo extends Component {
  render() {
    return (
      <div className="logoContainer">
        <img className="logo" src={process.env.PUBLIC_URL + "logosvg.svg"} />
      </div>
    );
  }
}
export default Logo;
