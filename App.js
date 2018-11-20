import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AppNavigator from './src/navigation/appNavigator';
import './src/config/StatusBarConfig'
import SideMenu from 'react-native-side-menu';
import IOSIcon from "react-native-vector-icons/Ionicons";
import Menu from './src/screens/Menu';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      selectedItem: 'About',
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
    });

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <TouchableOpacity
          onPress={this.toggle}
          style={styles.button}
        >
        <IOSIcon name="ios-menu" size={30} />
        </TouchableOpacity>
        <AppNavigator />
      </SideMenu>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 30,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

