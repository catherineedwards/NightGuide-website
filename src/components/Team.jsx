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
              <div className="col">
                {" "}
                <img
                  className="rounded"
                  alt="Taz"
                  src={process.env.PUBLIC_URL + "taz.png"}
                />
                <p className="profile">
                  Taz
                  <br />
                  Aquarius <Emoji text="♒" />
                  <br />
                  Rooster <Emoji text="🐓" />
                </p>
              </div>

              <div className="col">
                {" "}
                <img
                  className="rounded"
                  alt="Ollie"
                  src={process.env.PUBLIC_URL + "ollie.png"}
                />
                <p className="profile">
                  Ollie
                  <br />
                  Aquarius <Emoji text="♒" />
                  <br />
                  Dog <Emoji text="🐕" />
                </p>
              </div>

              <div className="col">
                <img
                  className="rounded"
                  alt="Joan"
                  src={process.env.PUBLIC_URL + "joan.png"}
                />
                <p className="profile">
                  Joan
                  <br />
                  Sagittarius <Emoji text="♐" />
                  <br />
                  Horse <Emoji text="🐎" />
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img
                  className="rounded"
                  alt="Sungmi"
                  src={process.env.PUBLIC_URL + "sungmi.png"}
                />
                <p className="profile">
                  Sungmi
                  <br />
                  Capricorn <Emoji text="♑" />
                  <br />
                  Tiger <Emoji text="🐅" />
                </p>
              </div>
              <div className="col">
                {" "}
                <img
                  className="rounded"
                  alt="Kelly"
                  src={process.env.PUBLIC_URL + "kelly.png"}
                />
                <p className="profile">
                  Kelly
                  <br />
                  Libra <Emoji text="♎" />
                  <br />
                  Monkey <Emoji text="🐒" />
                  <br />
                </p>
              </div>
              <div className="col">
                <p>
                  {" "}
                  <img
                    className="rounded"
                    alt="Cathy"
                    src={process.env.PUBLIC_URL + "cathy.jpg"}
                  />{" "}
                </p>
                <p className="profile">
                  Cathy
                  <br />
                  Leo <Emoji text="♌" />
                  <br />
                  Tiger <Emoji text="🐅" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Team;
