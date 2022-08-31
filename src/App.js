import "./App.css";
import React, { Component } from "react";
import AuthPage from "./pages/AuthPage/AuthPage";
import MainPage from "./components/MainPage/MainPage";

export default class App extends Component {
  state = {
    user: null,
  };

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData });
  };

  componentDidMount() {
    let token = localStorage.getItem("token");

    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem();
        token = null;
      } else {
        this.setState({ user: payload.user });
      }
    }
  }

  render() {
    return (
      <main className="App">
        {this.state.user ? (
          <MainPage setUserInState={this.setUserInState} />
        ) : (
          <AuthPage setUserInState={this.setUserInState} />
        )}
      </main>
    );
  }
}
