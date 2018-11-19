import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Home',
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#2F95D6',
      },
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
            <Text>Home Page</Text>
        </View>
      );
    }
  }