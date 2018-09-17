import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <img src="../images/ironhack-logo.svg" />
          <img src="../images/menu-top.svg" />
        </header>

        <div className="info">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn a Frontend framework from scratch to become a Ninka
            Developer
          </p>
          <button>AWESOME!</button>
        </div>

        <div className="features">
          <div className="icons">
            <img src="/images/icon1.png" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs</p>
          </div>

          <div className="icons">
            <img src="/images/icon2.png" />
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state</p>
          </div>

          <div className="icons">
            <img src="/images/icon3.png" />
            <h2>Single-way</h2>
            <p>A set of immutable values that manage the component`s</p>
          </div>

          <div className="icons">
            <img src="/images/icon4.png" />
            <h2>JSX</h2>
            <p>Statically-typed desgined to run on modern browsers</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
