import React, { Component } from 'react'
import UserLogOut from '../UserLogOut/UserLogOut'

export default class MainPage extends Component {
   
  render() {
    return (
      <div>MainPage
      <UserLogOut setUserInState={this.props.setUserInState}/>
      </div>

    )
  }
}

