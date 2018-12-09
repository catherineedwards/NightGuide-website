import React, { Component } from "react";
import "./index.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Logo from "./components/Logo";
import About from "./components/About";
import GetApp from "./components/GetApp";
import Contribute from "./components/Contribute";
import Team from "./components/Team";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <div className="hero-bkg-animated">
          <Nav />
          <Header />
          <Logo />
          <About />
          <GetApp />
          <Contribute />
          <Team />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
