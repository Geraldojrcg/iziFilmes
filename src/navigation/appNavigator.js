import React from 'react';
import {createAppContainer, createStackNavigator, createDrawerNavigator} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen'
import {Icon} from 'native-base';

const Drawer = createAppContainer(
  createDrawerNavigator({
      Home: {
        screen: HomeScreen,
      },
    })
);

Drawer.navigationOptions = {
  title: "Filmes",
  headerTintColor: '#2F95D6',
  headerLeft: (
    <Icon name="md-menu" size={30} style={{marginLeft: 5}}/>
  ),
};

export default createAppContainer(
    createStackNavigator({
      Home:{screen: Drawer},
    })
);