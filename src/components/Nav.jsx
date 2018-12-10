import React, { Component } from "react";
import "../index.css";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bd nav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#about">
              About <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#features">
              Features <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#current">
              Contribute <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#team">
              Team <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
