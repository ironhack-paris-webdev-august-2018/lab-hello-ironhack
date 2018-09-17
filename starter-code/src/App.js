import React, { Component } from "react"
import "./App.css"

class App extends Component {
	render() {
		return (
			<div className="app">
				<header>
					<div className="upper-header">
						<img src="/images/ironhack-logo.svg"></img>
						<img src="/images/menu-top.svg"></img>
					</div>
					<div className="sub-header">
						<h1>Say Hello To
							<br /> ReactJS</h1>
						<p>You will learn a frontend
							<br /> framework from scratch, to 
							<br /> become a ninka developer</p>
						<button>Awesome!</button>
					</div>
				</header>
				<section className="card-container">
					<div className="card">
						<img className="images" src="/images/icon1.png"></img>
						<h4>Declarative</h4>
						<p>React makes it painless to to create interactive UIs</p>
					</div>
					<div className="card">
						<img className="images" src="/images/icon2.png"></img>
						<h4>Components</h4>
						<p>Build encapsulated Components taht manage their state</p>
					</div>
					<div className="card">
						<img className="images" src="/images/icon3.png"></img>
						<h4>Single-way</h4>
						<p>A set of immutable values are passed to the Components</p>
					</div>
					<div className="card">
						<img className="images" src="/images/icon4.png"></img>
						<h4>JSX</h4>
						<p>Statically-typed, designed to run on modern browsers</p>
					</div>
				</section>
			</div>
		)
	}
}

export default App;