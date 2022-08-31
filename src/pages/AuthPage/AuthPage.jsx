import React from 'react';
import "./AuthPage.css"
import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpForm from '../../components/SignUpForm/SignUpForm';

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
              onClick={() => this.setState({ showLogin: !this.state.showLogin })}>
              {this.state.showLogin ? "LOG IN" : "SIGN UP"}
            </h3>
          </div>
          {this.state.showLogin ? (
            <LoginForm setUserInState={this.props.setUserInState} />
          ) : (
            <SignUpForm setUserInState={this.props.setUserInState} />
          )}
          </div>
        </main>
      );
    }
  }
