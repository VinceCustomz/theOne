import React, { Component } from "react";
import UserLogOut from "../UserLogOut/UserLogOut";
import NavBar from "../NavBar/NavBar";
import './MainPage.css'

export default class MainPage extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div>
          MainPage
          <UserLogOut setUserInState={this.props.setUserInState} />

        </div>
      </>
    );
  }
}
