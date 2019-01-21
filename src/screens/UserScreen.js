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
import { Icon } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';

export default class UserScreen extends Component{

    static navigationOptions = ({navigation}) => ({
      title: 'User',
      headerLeft: (<Icon name="md-menu" style={{ color: 'white', marginLeft: 20}} onPress={()=>{navigation.dispatch(DrawerActions.toggleDrawer())}}></Icon>),
      headerStyle: {
        backgroundColor: '#003eb2',
      },
      headerTintColor: '#fff',
    });

    render() {
      return (
        <View style={styles.container}>
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