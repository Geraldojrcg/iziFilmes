import React , {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Button,
} from 'react-native';
import {Container, Header, Left, Body, Icon, Title} from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';

export default class HomeScreen extends Component{
    render() {
      return (
        <View style={styles.container}>
          <View style={{height: 24, backgroundColor: "blue"}} />
          <Header>
            <Left>
              <Icon name="md-menu" style={{color:"white"}} onPress={()=>{this.props.navigation.dispatch(DrawerActions.toggleDrawer())}}></Icon>
            </Left>
            <Body>
              <Title>User</Title>
            </Body>
          </Header>
          <View>
              <Text>User</Text>
          </View>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#f5f5f5",
    },
  });