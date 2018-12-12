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

          <div class="container">
            <div class="row">
              <div class="col">
                {" "}
                <img
                  className="rounded"
                  alt="Taz"
                  src={process.env.PUBLIC_URL + "taz.png"}
                />
                <p className="profile">
                  Taz: Aquarius <Emoji text="♒" />, Rooster <Emoji text="🐓" />
                </p>
              </div>

              <div class="col">
                {" "}
                <img
                  className="rounded"
                  alt="Ollie"
                  src={process.env.PUBLIC_URL + "ollie.png"}
                />
                <p className="profile">
                  Ollie: Aquarius <Emoji text="♒" />, Dog <Emoji text="🐕" />
                </p>
              </div>

              <div class="col">
                <img
                  className="rounded"
                  alt="Joan"
                  src={process.env.PUBLIC_URL + "joan.png"}
                />
                <p className="profile">
                  Joan: Sagittarius <Emoji text="♐" />, Horse{" "}
                  <Emoji text="🐎" />
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <img
                  className="rounded"
                  alt="Sungmi"
                  src={process.env.PUBLIC_URL + "sungmi.png"}
                />
                <p className="profile">
                  Sungmi: Capricorn <Emoji text="♑" />, Tiger{" "}
                  <Emoji text="🐅" />
                </p>
              </div>
              <div class="col">
                {" "}
                <img
                  className="rounded"
                  alt="Kelly"
                  src={process.env.PUBLIC_URL + "kelly.png"}
                />
                <p className="profile">
                  Kelly: Libra <Emoji text="♎" />, Monkey <Emoji text="🐒" />
                </p>
              </div>
              <div class="col">
                <p>
                  {" "}
                  <img
                    className="rounded"
                    alt="Cathy"
                    src={process.env.PUBLIC_URL + "cathy.jpg"}
                  />{" "}
                </p>
                <p className="profile">
                  Cathy: Leo <Emoji text="♌" />, Tiger <Emoji text="🐅" />
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
