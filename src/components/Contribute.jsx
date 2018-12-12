import React, { Component } from "react";
import "../index.css";

class Contribute extends Component {
  render() {
    return (
      <div className="contribute">
        <h2 id="contribute">Contribute</h2>
        <p>
          <a href="https://github.com/joan-SHI/nightguide-clientside">
            Check out our repository on GitHub
          </a>
        </p>
        <p>
          <img
            className="rounded"
            alt="Github logo"
            src={process.env.PUBLIC_URL + "github.png"}
          />
        </p>
      </div>
    );
  }
}
export default Contribute;
