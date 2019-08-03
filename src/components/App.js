import React, { Component } from 'react';
import Router from "./Router";
import GlobalStyles from './GlobalStyles';

export default class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    )
  }
}
