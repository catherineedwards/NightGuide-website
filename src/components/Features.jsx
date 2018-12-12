import React, { Component } from "react";
import "../index.css";

class Features extends Component {
  render() {
    return (
      <div className="features">
        <h2 id="features">Features</h2>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">
                {" "}
                <img
                  className="rounded"
                  alt="Constellation of stars in the sky"
                  src={process.env.PUBLIC_URL + "constellation.png"}
                />
              </th>
              <td>Constellation viewer</td>
              <td>
                See a list of constellations and when you might be able to see
                them.
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <img
                  className="rounded"
                  alt="Planets in the sky"
                  src={process.env.PUBLIC_URL + "planet.png"}
                />
              </th>
              <td>Planet finder</td>
              <td>
                See the planets of our solar system and when you might be able
                to see them.
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <img
                  className="rounded"
                  alt="Lookout spot to stargaze"
                  src={process.env.PUBLIC_URL + "lookout.png"}
                />
              </th>
              <td>Find a lookout</td>
              <td>Find local lookout points to stargaze.</td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <img
                  className="rounded"
                  alt="Guide to the weather forecast"
                  src={process.env.PUBLIC_URL + "weather.png"}
                />
              </th>
              <td>Weather guide</td>
              <td>
                The weather guide will help you find out if the conditions are
                good to go star hunting.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Features;
