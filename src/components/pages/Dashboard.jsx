import React, { Component } from "react";

export class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			logOut: false,
		};
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout(e) {
		this.props.history.push("/login");
	}

	render() {
		return (
			<div className="container">
				<h1>Welcome!</h1>
				<button onClick={this.handleLogout} className="btn">
					<p>Logout</p>
				</button>
			</div>
		);
	}
}

export default Dashboard;
