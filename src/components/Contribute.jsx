import React, { Component } from "react";
import "../index.css";
import Emoji from "react-emoji-render";

class Contribute extends Component {
  render() {
    return (
      <div className="contribute">
        <h2 id="contribute">Contribute</h2>
        <p>
          We are a number of students who came from having no coding skills a
          matter of weeks prior to starting this project to now proudly sharing
          our code with the global tech community.
        </p>
        <p>
          This shows our appetite to learn, so we are eager to hear feedback
          from the community!
        </p>
        <p>
          <a href="https://github.com/joan-SHI/nightguide-clientside/">
            We proudly host our source code on Github with <Emoji text="❤" />,
            and invite you to look through our repo.
          </a>
        </p>
        <p>
          We welcome feedback, questions, and suggestions from anyone with any
          interest in our project. The more issues and pull requests posted
          against our code, the better! <Emoji text="👩‍💻👨‍💻" />
        </p>
        <p>
          Our mobile application was built using{" "}
          <a href="https://facebook.github.io/react-native/">React Native</a>{" "}
          and <a href="https://expo.io/">Expo</a>.
        </p>
        <p>
          <a href="https://github.com/catherineedwards/nightguide-website">
            Our website was built with Bootstrap and React.
          </a>
        </p>
        <p>
          <a href="https://facebook.github.io/react-native">
            <img
              className="rounded"
              alt="React Native logo"
              src={process.env.PUBLIC_URL + "react-native.png"}
            />
          </a>
          <a href="https://expo.io/">
            <img
              className="rounded"
              alt="Expo logo"
              src={process.env.PUBLIC_URL + "expo.jpg"}
            />
          </a>
          <a href="https://www.github.com/">
            <img
              className="rounded"
              alt="Github logo"
              src={process.env.PUBLIC_URL + "github.png"}
            />
          </a>
          <a href="https://getbootstrap.com/">
            <img
              className="rounded"
              alt="Bootstrap logo"
              src={process.env.PUBLIC_URL + "bootstrap.png"}
            />
          </a>
          <a href="https://reactjs.org/">
            <img
              className="rounded"
              alt="React JS logo"
              src={process.env.PUBLIC_URL + "react.png"}
            />
          </a>
        </p>
      </div>
    );
  }
}
export default Contribute;
