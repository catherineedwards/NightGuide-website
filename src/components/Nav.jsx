import React, { Component } from "react";
import "../index.css";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#app">Get our app</a>
          </li>
          <li>
            <a href="#contribute">Contribute</a>
          </li>
          <li>
            <a href="#team">The team</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Nav;
