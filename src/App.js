import React, { Component } from "react";
import "./index.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Logo from "./components/Logo";
import About from "./components/About";
import Features from "./components/Features";
import Contribute from "./components/Contribute";
import Team from "./components/Team";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <Nav />
          <Header />
          <Logo />
          <About />
          <Features />
          <Contribute />
          <Team />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
