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
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">
                  <img
                    className="img-fluid"
                    alt="Taz"
                    src={process.env.PUBLIC_URL + "taz.png"}
                  />
                </th>
                <td>Taz</td>
                <td>
                  Aquarius <Emoji text="♒" /> <br />
                  Rooster <Emoji text="🐓" /> <br />
                  <a href="https://github.com/tkurudi">Github profile</a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    className="img-fluid"
                    alt="Ollie"
                    src={process.env.PUBLIC_URL + "ollie.png"}
                  />
                </th>
                <td>Ollie</td>
                <td>
                  Aquarius <Emoji text="♒" /> <br />
                  Dog <Emoji text="🐕" /> <br />
                  <a href="https://www.github.com/oliver-harcourt">
                    Github profile
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    className="img-fluid"
                    alt="Joan"
                    src={process.env.PUBLIC_URL + "joan.png"}
                  />
                </th>
                <td>Joan</td>
                <td>
                  Sagittarius <Emoji text="♐" /> <br />
                  Horse <Emoji text="🐎" />
                  <br />
                  <a href="https://www.github.com/Joan-SHI">Github profile</a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    className="img-fluid"
                    alt="Sungmi"
                    src={process.env.PUBLIC_URL + "sungmi.png"}
                  />
                </th>
                <td>Sungmi</td>
                <td>
                  Capricorn <Emoji text="♑" /> <br />
                  Tiger <Emoji text="🐅" /> <br />
                  <a href="https://www.github.com/sungmiii">Github profile</a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    className="img-fluid"
                    alt="Kelly"
                    src={process.env.PUBLIC_URL + "kelly.png"}
                  />
                </th>
                <td>Kelly</td>
                <td>
                  Libra <Emoji text="♎" /> <br />
                  Monkey <Emoji text="🐒" /> <br />
                  <a href="https://www.github.com/kelly-stone">
                    Github profile
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    className="img-fluid"
                    alt="Cathy"
                    src={process.env.PUBLIC_URL + "cathy.jpg"}
                  />
                </th>
                <td>Cathy</td>
                <td>
                  Leo <Emoji text="♌" /> <br />
                  Tiger <Emoji text="🐅" /> <br />
                  <a href="https://www.github.com/catherineedwards">
                    Github profile
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
export default Team;
