import React, { Component } from "react";
import "../index.css";
import Emoji from "react-emoji-render";

class Inspired extends Component {
  render() {
    return (
      <div className="inspired">
        <h2>
          <strike>Inspired</strike> Enspired?
        </h2>
        <p>
          Our work wouldn't be possible without the inspiring, motivating, and
          enlightening teaching staff of Enspiral Dev Academy.
        </p>
        <p>
          <a href="https://devacademy.co.nz/">
            If you are looking to pursue a career in web development in 2019,
            get in touch with the wonderful people at Enspiral Dev Academy.{" "}
            <Emoji text="💻" />
          </a>
        </p>
        <p>
          <a href="https://devacademy.co.nz/">
            <img
              alt="Enspiral Dev Academy Logo"
              src={process.env.PUBLIC_URL + "eda.png"}
            />
          </a>
        </p>
      </div>
    );
  }
}

export default Inspired;
