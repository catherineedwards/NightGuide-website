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
          <div>
            <p className="avatar">
              <img
                className="img-fluid"
                alt="Taz"
                src={process.env.PUBLIC_URL + "taz.png"}
              />{" "}
              <br />
              Taz: Aquarius <Emoji text="♒" />, Rooster <Emoji text="🐓" />
            </p>
          </div>
        </div>
        <div>
          <p className="avatar">
            <img
              className="img-fluid"
              alt="Ollie"
              src={process.env.PUBLIC_URL + "ollie.png"}
            />{" "}
            <br />
            Ollie: Aquarius <Emoji text="♒" />, Dog <Emoji text="🐕" />
          </p>
        </div>
        <div>
          <p className="avatar">
            <img
              className="img-fluid"
              alt="Joan"
              src={process.env.PUBLIC_URL + "joan.png"}
            />{" "}
            <br />
            Joan: Sagittarius <Emoji text="♐" />, Horse <Emoji text="🐎" />
          </p>
        </div>
        <div>
          <p className="avatar">
            <img
              className="img-fluid"
              alt="Sungmi"
              src={process.env.PUBLIC_URL + "sungmi.png"}
            />{" "}
            <br />
            Sungmi: Capricorn <Emoji text="♑" />, Tiger <Emoji text="🐅" />
          </p>
        </div>
        <div>
          <p className="avatar">
            <img
              className="img-fluid"
              alt="Kelly"
              src={process.env.PUBLIC_URL + "kelly.png"}
            />{" "}
            <br />
            Kelly: Libra <Emoji text="♎" />, Monkey <Emoji text="🐒" />
          </p>
        </div>
        <div>
          <p className="avatar">
            <img
              className="img-fluid"
              alt="Cathy"
              src={process.env.PUBLIC_URL + "cathy.jpg"}
            />{" "}
            <br />
            Cathy: Leo <Emoji text="♌" />, Tiger <Emoji text="🐅" />
          </p>
        </div>
      </React.Fragment>
    );
  }
}
export default Team;
