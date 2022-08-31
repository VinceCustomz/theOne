import React from "react";
import "./AuthPage.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default class AuthPage extends React.Component {
  state = {
    showLogin: true,
  };

  render() {
    return (
      <main className="AuthPage auth-wrapper">
        <div className="auth-inner">
          <div>
            <h3
              onClick={() =>
                this.setState({ showLogin: !this.state.showLogin })
              }
            >
              {this.state.showLogin ? "LOG IN" : "SIGN UP"}
            </h3>
          </div>
          {this.state.showLogin ? (
            <LoginForm setUserInState={this.props.setUserInState} />
          ) : (
            <SignUpForm setUserInState={this.props.setUserInState} />
          )}
          <p
            className="forgot-password text-right"
            onClick={() => this.setState({ showLogin: !this.state.showLogin })}
          >
            <span className="signuphere">
              {this.state.showLogin
                ? "Don't have an account? Sign up Here"
                : "Have an account? Log in Here"}
            </span>
          </p>
        </div>
      </main>
    );
  }
}
