import React, { Component } from "react";
import UserLogOut from "../UserLogOut/UserLogOut";
import NavBar from "../NavBar/NavBar";

import { Main } from "./MainPageElements";

export default class MainPage extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Main>
          MainPage
          <UserLogOut setUserInState={this.props.setUserInState} />
        </Main>
      </>
    );
  }
}
