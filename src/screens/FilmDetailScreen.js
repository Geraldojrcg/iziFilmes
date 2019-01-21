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

export default class FilmDetailScreen extends Component{

  static navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.item.title}`,
    headerStyle: {
      backgroundColor: '#003eb2',
    },
    headerTintColor: '#fff',
  });

  switchToLandscape() {
    ScreenOrientation.allow(ScreenOrientation.Orientation.LANDSCAPE);
  }

  switchToPortrait() {
    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>details</Text>
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