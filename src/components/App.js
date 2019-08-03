import React, { Component } from 'react'
import Router from "./Router"
import Header from "./Header"

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router />
      </>
    )
  }
}
