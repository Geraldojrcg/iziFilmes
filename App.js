import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AppNavigator from './src/navigation/appNavigator';
import './src/config/StatusBarConfig'

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator /> 
    );
  }
}