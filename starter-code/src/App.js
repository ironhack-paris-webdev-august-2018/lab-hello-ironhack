import React, { Component } from "react";

import "./App.css";

class App extends Component {
    render() {
        return ( 
            <section>
                <header>
                    <a href="#0"><img src="../images/ironhack-logo.svg" /></a>
                    <img src="../images/menu-top.svg" />
                </header>

                <section id="hero-section">
                    <h1>Say hello to <br /> ReactJS </h1>
                    <p>You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
                    <button>Awesome!</button>
                </section>

                <section id="details-section">
                    <div className="details-wrapper">
                        <div className="detail-item">
                            <img src="../images/icon1.png" />
                            <h3>Declarative</h3>
                            <p>React makes it painless to create interactive UIs.</p>
                        </div>
                        <div className="detail-item">
                            <img src="../images/icon2.png" />
                            <h3>Components</h3>
                            <p>Build encapsulated components that manage their state.</p>
                        </div>
                        <div className="detail-item">
                            <img src="../images/icon3.png" />
                            <h3>Single-Way</h3>
                            <p>A set of immutable values are passed to the component's.</p>
                        </div>
                        <div className="detail-item">
                            <img src="../images/icon4.png" />
                            <h3>JSX</h3>
                            <p>Statically-typed, design to run on modern browsers.</p>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default App;
