import React from 'react';
import {createAppContainer, createStackNavigator, createDrawerNavigator} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen'
import UserScreen from '../screens/UserScreen'
import {Icon} from 'native-base';

const Drawer = createAppContainer(
  createDrawerNavigator({
      Home: {
        screen: HomeScreen,
      },
      User: {
        screen: UserScreen
      }
    })
);

const Stack = createAppContainer(
  createStackNavigator({
      Drawer: {
        screen: Drawer,
      },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   })
);

/*Drawer.navigationOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}*/

export default Stack;