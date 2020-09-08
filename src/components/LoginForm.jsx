import React, { Component } from "react";
import PropTypes from "prop-types";

export class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			remember: false,
			loggedIn: false,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleRemember = this.handleRemember.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.email === "") {
			return;
		}
		this.props.history.push("/dashboard");
	}

	handleChange(e) {
		this.setState({
			email: e.target.value,
		});
	}

	handleRemember(e) {
		this.setState({
			remember: true,
		});
	}

	render() {
		return (
			<div className="loginForm">
				<img className="logo" src="/logo-r.svg" alt="Green logo" />
				<div className="info">
					<h1>Example login screen</h1>
					<p>Getting started with Green.</p>
				</div>
				<form action="" onSubmit={this.handleSubmit}>
					<label className="email-input" htmlFor="email">
						{" "}
						<p>Email Address</p>
						<input
							onChange={this.handleChange}
							type="text"
							name="email"
							id="email"
						/>
					</label>
					<label id="remember">
						<input
							onClick={this.handleRemember}
							type="checkbox"
							name="remember"
						/>{" "}
						<p>Remember this device</p>
					</label>
					<button onClick={this.handleSubmit} className="btn" type="submit">
						<p>Sign In</p>
					</button>
				</form>
			</div>
		);
	}
}

LoginForm.propTypes = {
	email: PropTypes.string.isRequired,
};

export default LoginForm;
