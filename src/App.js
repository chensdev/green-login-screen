import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/pages/Dashboard";
import "./App.css";

export class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route path="/" exact component={LoginForm}></Route>
						<Route path="/dashboard" exact component={Dashboard}></Route>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
