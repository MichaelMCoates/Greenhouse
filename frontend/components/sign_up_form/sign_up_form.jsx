import React from 'react';
import { Link, withRouter } from 'react-router';

class SignUpForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {first_name: '', last_name: '', email: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
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
		return (<div className="link" onClick={this.props.modalLogIn} >Log In</div>);
	}

  guestLoginLink() {
    return (<div className="link" onClick={this.props.guestLogin}>Guest Login</div>);
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
			<div className="session-form-container">
				<form onSubmit={this.handleSubmit} className="signup-form-box">
          <p className="divider">
            <span className="divider-line">
              Sign Up With Your Email
            </span>
          </p>
					{this.renderErrors()}
					<div className="signup-form">
						<br/>
							<input type="text"
								value={this.state.first_name}
								onChange={this.update("first_name")}
								className="session-input"
                placeholder="First Name" />
						<br/>
							<input type="text"
								value={this.state.last_name}
								onChange={this.update("last_name")}
								className="session-input"
                placeholder="Last Name" />
						<br/>
							<input type="text"
								value={this.state.email}
								onChange={this.update("email")}
								className="session-input"
                placeholder="Email" />
						<br/>
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="session-input"
                placeholder="Password" />
						<br/>
						<input className="pink-button" type="submit" value="CREATE AN ACCOUNT" />
					</div>
				</form>
        <div className="topborder" onClick={this.props.clearErrors}>
          Already have an account? <br></br><br></br> {this.navLink()}
        </div>
        or
        <br/>
        {this.guestLoginLink()}
			</div>
		);
	}
}

export default withRouter(SignUpForm);
