import React from 'react';
import { Link, withRouter } from 'react-router';

class LogInForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// componentDidUpdate() {
	// 	this.redirectIfLoggedIn();
	// }
  //
	// redirectIfLoggedIn() {
	// 	if (this.props.loggedIn) {
	// 		this.props.router.push("/");
	// 	}
	// }

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
		return (<div className="link" onClick={this.props.modalSignUp}>Sign Up</div>);
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
				<form onSubmit={this.handleSubmit} className="login-form-box">
          <p className="divider">
  					<span className="divider-line">
              Log In With Your Email
            </span>
          </p>
					{this.renderErrors()}
					<div className="login-form">
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
						<input className="pink-button" type="submit" value="LOG IN" />
					</div>
				</form>
        <div className="topborder" onClick={this.props.clearErrors}>
          New to GREENHOUSE? {this.navLink()}
        </div>
        or
        <br/>
        {this.guestLoginLink()}
			</div>
		);
	}

}

export default withRouter(LogInForm);
