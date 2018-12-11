import React, { Component } from 'react';
import AppNavigator from './src/navigation/appNavigator';
import './src/config/StatusBarConfig';

export default class App extends Component {
    render() {
      return (
        <AppNavigator/>
      );
    }
  }