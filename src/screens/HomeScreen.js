import React , {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  FlatList,
  Button,
} from 'react-native';
import { Constants } from 'expo';
import { Col, Row, Grid } from "react-native-easy-grid";
import {api, cape_url} from '../services/api';
import {Container, Header, Left, Body, Icon, Title, Input} from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';

export default class HomeScreen extends Component{
    constructor(props) {
      super(props);
      this.state = {
        films: [],
        filmsQuery: [],
        searchQuery: "",
      };
    }

    //Options for default navBar
    static navigationOptions = ({navigation}) => {
      return{
        title: navigation.getParam('title', 'Filmes'),
        headerLeft: navigation.getParam('headerLeft',
            (<Icon name="md-menu" style={{color: "white", marginLeft:20}} onPress={()=>{navigation.dispatch(DrawerActions.toggleDrawer())}}></Icon>)),
        headerRight:navigation.getParam('headerRight', 
          (<Icon name='md-search' style={{color: "white", marginRight:20}} onPress={navigation.getParam('handleNavBarCuston')}></Icon>)),
        headerStyle: navigation.getParam('headerStyle', {
          backgroundColor: '#003eb2',
        }),
        headerTintColor: '#fff',
      }
    };

    //Function to render the custon navBar
    toggleSearchBar = () => {
      this.props.navigation.setParams({
        title: null,
        headerLeft: (
          <View>
            <Grid>
              <Col style={{marginTop: 13.5}}>
              <Icon name="md-arrow-back" style={{marginLeft:20}} onPress={this.props.navigation.getParam('handleNavBarDefault')}></Icon>
              </Col>
              <Col style={{marginLeft: 20, width: 200}}>
              <Input placeholder="Pesquisar"  onChangeText={(value) => this.setState({searchQuery: value})}></Input>
              </Col>
            </Grid>
          </View>
          ),
        headerRight: (<Icon name='md-search' style={{marginRight:20}} onPress={this.props.navigation.getParam('searchFilms')}></Icon>),
        headerStyle: {
          backgroundColor: "#fff"
        }
      });
    }

    //Function to delete the custon navBar and render default navBar
    removeSearchBar = () => {
      this.props.navigation.setParams({
        title: 'Filmes',
        headerLeft: (<Icon name="md-menu" style={{color: "white", marginLeft:20}} onPress={()=>{this.props.navigation.dispatch(DrawerActions.toggleDrawer())}}></Icon>),
        headerRight:(<Icon name='md-search' style={{color: "white", marginRight:20}} onPress={this.props.navigation.getParam('handleNavBarCuston')}></Icon>),
        headerStyle: {
          backgroundColor: '#003eb2',
        }
      });
      let films = this.state.films;
      this.setState({filmsQuery: films});
    }

    searchFilms = () => {
      let films = this.state.films;
      let query = this.state.searchQuery;
      let filmsQuery = [];
      films.forEach(film =>{
        if(film.title.toLowerCase().includes(query)){
          filmsQuery.push(film);
        }
      });
      this.setState({filmsQuery: filmsQuery});
    }

    componentDidMount(){
      this.loadFilms();
      this.props.navigation.setParams({
        handleNavBarCuston: this.toggleSearchBar,
        handleNavBarDefault: this.removeSearchBar,
        searchFilms: this.searchFilms,
      })
    }

    loadFilms = async () =>{
      try{
        await api.get(`/films`).then(response =>{
          const films = response.data;
          films.forEach(film => {
            if(film.cape_url){
              cape = film.cape_url.split("/");
              film.cape = cape_url + cape[1];
            }
          });
          this.setState({
            films: films,
            filmsQuery: films
          });
        });
      } catch (error){
        console.log(error);
      }
    };

    renderItem = ({item}) => (
      <TouchableWithoutFeedback  onPress={() => this.props.navigation.push('FilmDetailScreen', {item: item})}>
        <View style={styles.filmContainer}>
          <Grid>
            <Col style={{width: '40%'}}>
              <Image
                style={styles.cape}
                source={{uri: item.cape}}
              />
            </Col>
            <Col style={{width: '60%'}}>
              <Text style={styles.filmTitle}>{item.title}</Text>
              <Text numberOfLines={4} style={styles.filmDesc}>{item.description}</Text>
              <Text style={styles.dateRelease}>Ano de Lançamento: {item.date_release}</Text>
            </Col>
          </Grid>
        </View>
      </TouchableWithoutFeedback>
    );

    render() {
      return (
        <View style={styles.container}>
          <FlatList
            contentContainerStyle={styles.list}
            data={this.state.filmsQuery}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.renderItem}
          />
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#f5f5f5",
    },
    list:{
      padding: 5
    },
    filmContainer:{
      backgroundColor: "#FFF",
      borderWidth: 1,
      borderColor: "#DDD",
      borderRadius: 5,
      padding: 10,
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
    },
    cape:{
      width: 100,
      height: 130,
      padding: 2
    },
    dateRelease:{
      fontSize: 14,
      color: "#333",
      marginTop: 15,
      textAlign: "justify",
    },
    
  });