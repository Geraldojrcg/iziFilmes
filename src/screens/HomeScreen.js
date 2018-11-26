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
  FlatList,
} from 'react-native';
import api from '../services/api';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Home',
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#2F95D6',
      },
    };
    state = {
      docs: [],
      page: 1,
      info: {},
    };
    componentDidMount(){
      this.loadFilms();
    }
    loadFilms = async (page = 1) =>{
      try{
        const response =  await api.get(`/films?page=${page}`);
        const { docs, ...info } = response.data;
        this.setState({
          docs: [...this.state.docs, ...docs],
          info,
          page,
        });
      } catch (error){
        console.log(error);
      }
    };

    renderItem = ({item}) => (
      <View style={styles.filmContainer}>
        <Text style={styles.filmTitle}>{item.title}</Text>
        <Text style={styles.filmDesc}>{item.description}</Text>
      </View>
    );

    loadMore = () => {
      const {page, info} = this.state;
      if (page === info.pages) return;
      const pageNumber = page + 1;
      this.loadFilms(pageNumber);
    };

    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
            <FlatList
              contentContainerStyle={styles.list}
              data={this.state.docs}
              keyExtractor={item => item._id}
              renderItem={this.renderItem}
              onEndReached={this.loadMore}
              onEndReachedThreshold={0.1}
            />
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#f5f5f5"
    },
    list:{
      padding: 20
    },
    filmContainer:{
      backgroundColor: "#FFF",
      borderWidth: 1,
      borderColor: "#DDD",
      borderRadius: 5,
      padding: 20,
      marginBottom: 20,
    },
    filmTitle:{
      fontSize: 18,
      fontWeight: "bold",
      color:"#333"
    },
    filmDesc:{
      fontSize: 14,
      color: "#999",
      marginTop: 5,
      textAlign: "justify",
    }
  });