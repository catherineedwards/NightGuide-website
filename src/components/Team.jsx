import React, { Component } from "react";
import "../index.css";

class Team extends Component {
  render() {
    return (
      <div>
        <h2 id="team">The team</h2>
        <div>
          <img
            className="TazPhoto"
            alt="Taz"
            src={process.env.PUBLIC_URL + "taz.png"}
          />
          <p>Taz: Aquarius, Rooster</p>
        </div>
        <div>
          <img
            className="OlliePhoto"
            alt="Ollie"
            src={process.env.PUBLIC_URL + "ollie.png"}
          />
          <p>Ollie: Aquarius, Dog</p>
        </div>
        <div>
          <img
            className="JoanPhoto"
            alt="Joan"
            src={process.env.PUBLIC_URL + "joan.png"}
          />
          <p>Joan: Sagittarius, Horse</p>
        </div>
        <div>
          <img
            className="SungmiPhoto"
            alt="Sungmi"
            src={process.env.PUBLIC_URL + "sungmi.png"}
          />
          <p>Sungmi: Capricorn, Tiger</p>
        </div>
        <div>
          <img
            className="KellyPhoto"
            alt="Kelly"
            src={process.env.PUBLIC_URL + "kelly.png"}
          />
          <p>Kelly: Libra, Monkey</p>
        </div>
        <div>
          <img
            className="CathyPhoto"
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
