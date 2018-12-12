import React, { Component } from "react";
import "../index.css";
import Emoji from "react-emoji-render";

class Team extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="team">
          <h2>The team</h2>
          <div className="teamPhoto">
            <img
              className="img-fluid"
              alt="The team posing in front of Te Papa"
              src={process.env.PUBLIC_URL + "teamphoto.png"}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Team;
