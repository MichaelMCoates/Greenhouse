import React from 'react';
import { Link, withRouter } from 'react-router';

class LogInForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.login({user});
	}

	navLink() {
			return (<Link to="/signup">Sign Up</Link>);
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {


		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					Log In With Your Email
					<br/>
					{this.renderErrors()}
					<div className="login-form">
						<br/>
							<input type="text"
								value={this.state.email}
								onChange={this.update("email")}
								className="login-input"
                placeholder="Email" />
						<br/>
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input"
                placeholder="Password" />
						<br/>
						<input className="pink-button" type="submit" value="LOG IN" />
					</div>
				</form>
        New to GREENHOUSE? {this.navLink()}
			</div>
		);
	}

}

export default withRouter(LogInForm);
