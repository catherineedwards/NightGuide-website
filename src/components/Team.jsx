import React, { Component } from "react";
import "../index.css";
import Emoji from "react-emoji-render";

class Team extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h2 id="team">The team</h2>
          <div className="teamPhoto">
            <img
              className="img-fluid"
              alt="The team posing in front of Te Papa"
              src={process.env.PUBLIC_URL + "teamphoto.png"}
            />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <img
                  className="rounded"
                  alt="Taz"
                  src={process.env.PUBLIC_URL + "taz.png"}
                />
                Taz Aquarius <Emoji text="♒" />
                Rooster <Emoji text="🐓" />
              </div>
              <div className="col-sm-4">
                <img
                  className="rounded"
                  alt="Ollie"
                  src={process.env.PUBLIC_URL + "ollie.png"}
                />
                Ollie Aquarius <Emoji text="♒" />
                Dog <Emoji text="🐕" />
              </div>
              <div className="col-sm-4">
                <img
                  className="rounded"
                  alt="Joan"
                  src={process.env.PUBLIC_URL + "joan.png"}
                />
                Joan Sagittarius <Emoji text="♐" />
                Horse <Emoji text="🐎" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <img
                  className="rounded"
                  alt="Sungmi"
                  src={process.env.PUBLIC_URL + "sungmi.png"}
                />
                Sungmi Capricorn <Emoji text="♑" />
                Tiger <Emoji text="🐅" />
              </div>
              <div className="col-sm-4">
                <img
                  className="rounded"
                  alt="Kelly"
                  src={process.env.PUBLIC_URL + "kelly.png"}
                />
                Kelly Libra <Emoji text="♎" />
                Monkey <Emoji text="🐒" />
              </div>
              <div className="col-sm-4">
                <img
                  className="rounded"
                  alt="Cathy"
                  src={process.env.PUBLIC_URL + "cathy.jpg"}
                />
                Cathy
                <br />
                Leo <Emoji text="♌" />
                <br />
                Tiger <Emoji text="🐅" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Team;
