import React from 'react';
import { Link, withRouter } from 'react-router';

class SignUpForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {first_name: '', last_name: '', email: "", password: "" };
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
		this.props.signup({user});
	}

	navLink() {
		return (<Link to="/login">Log In</Link>);
	}

	renderErrors() {
    if (this.props.errors) {
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
	}

	render() {


		return (
			<div className="signup-form-container">
				<form onSubmit={this.handleSubmit} className="signup-form-box">
					Sign Up With Your Email
					<br/>
					{this.renderErrors()}
					<div className="signup-form">
						<br/>
							<input type="text"
								value={this.state.first_name}
								onChange={this.update("first_name")}
								className="signup-input"
                placeholder="First Name" />
						<br/>
							<input type="text"
								value={this.state.last_name}
								onChange={this.update("last_name")}
								className="signup-input"
                placeholder="Last Name" />
						<br/>
							<input type="text"
								value={this.state.email}
								onChange={this.update("email")}
								className="signup-input"
                placeholder="Email" />
						<br/>
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="signup-input"
                placeholder="Password" />
						<br/>
						<input className="pink-button" type="submit" value="CREATE AN ACCOUNT" />
					</div>
				</form>
        Already have an account? {this.navLink()}
			</div>
		);
	}

}

export default withRouter(SignUpForm);
