import React, { Component } from "react";
import "../index.css";

class Features extends Component {
  render() {
    return (
      <div className="features">
        <h2 id="features">Features</h2>
        <p>
          Nightguide is a multifaceted astronomical application built for
          curious users who are interested in our wonderful universe.
        </p>
        <h3>Constellation viewer</h3>
        <p>
          See a list of constellations and when you might be able to see them.
        </p>
        <h3>Planet finder</h3>
        <p>
          See the planets of our solar system and when you might be able to see
          them.
        </p>
        <h3>Find a lookout</h3>
        <p>Find local lookout points to stargaze.</p>
        <h3>Weather guide</h3>
        <p>
          The weather guide will help you find out if the conditions are good to
          go star hunting.
        </p>
      </div>
    );
  }
}
export default Features;
