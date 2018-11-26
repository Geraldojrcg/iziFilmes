import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigation/appNavigator';
import './src/config/StatusBarConfig'
import SideMenu from 'react-native-side-menu';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator /> 
    );
  }
}
