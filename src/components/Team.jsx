import React, { Component } from "react";
import "../index.css";
import Emoji from "react-emoji-render";

class Team extends Component {
  render() {
    return (
      <div>
        <h2 id="team">The team</h2>
        <div>
          <img
            className="avatar"
            alt="Taz"
            src={process.env.PUBLIC_URL + "taz.png"}
          />
          <p>
            Taz: Aquarius <Emoji text="♒" />, Rooster <Emoji text="🐓" />
          </p>
        </div>
        <div>
          <img
            className="avatar"
            alt="Ollie"
            src={process.env.PUBLIC_URL + "ollie.png"}
          />
          <p>
            Ollie: Aquarius <Emoji text="♒" />, Dog{" "}
          </p>
        </div>
        <div>
          <img
            className="avatar"
            alt="Joan"
            src={process.env.PUBLIC_URL + "joan.png"}
          />
          <p>Joan: Sagittarius, Horse</p>
        </div>
        <div>
          <img
            className="avatar"
            alt="Sungmi"
            src={process.env.PUBLIC_URL + "sungmi.png"}
          />
          <p>Sungmi: Capricorn, Tiger</p>
        </div>
        <div>
          <img
            className="avatar"
            alt="Kelly"
            src={process.env.PUBLIC_URL + "kelly.png"}
          />
          <p>Kelly: Libra, Monkey</p>
        </div>
        <div>
          <img
            className="avatar"
            alt="Cathy"
            src={process.env.PUBLIC_URL + "cathy.jpg"}
          />
          <p>Cathy: Leo, Tiger</p>
        </div>
      </div>
    );
  }
}
export default Team;
