import React from 'react';
import { Image } from 'react-native';
import {createAppContainer, createStackNavigator, createDrawerNavigator, DrawerItems} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';
import FilmDetailScreen from '../screens/FilmDetailScreen';
import {Container, Header, Left, Body, Icon, Title, Content} from 'native-base';

const HomeStack = createAppContainer(
  createStackNavigator({
    Home: {
      screen: HomeScreen,
    },
    FilmDetailScreen: {
      screen: FilmDetailScreen
    }
  })
);

const UserStack = createAppContainer(
  createStackNavigator({
    User: {
      screen: UserScreen
    }
  })
);

const CustomContentComponentDrawer = (props) => (
  <Container>
    <Header style={{height: 200, backgroundColor:"#003eb2"}}>
      <Body style={{flex: 1, alignItems: "center", justifyContent: "center", marginTop: 10}}>
        <Image
          style={{borderRadius:60}}
          source={require('../../assets/popcorn.png')}
          ></Image>
          <Title>iziFilms</Title>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>
)

const Drawer = createAppContainer(
  createDrawerNavigator({
      Home: {
        screen: HomeStack,
        navigationOptions:{
          drawerIcon: (<Icon name="md-film"></Icon>),
          drawerLabel: "Filmes",
        }
      },
      User: {
        screen: UserStack,
        navigationOptions:{
          drawerIcon: (<Icon name="md-people"></Icon>),
          drawerLabel: "Usuário",
        }
      }
    },{
      contentComponent: CustomContentComponentDrawer
    })
);

export default Drawer;