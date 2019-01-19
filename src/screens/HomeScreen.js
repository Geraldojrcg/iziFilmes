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
import { Constants } from 'expo';
import { Col, Row, Grid } from "react-native-easy-grid";
import api from '../services/api';
import {Container, Header, Left, Body, Icon, Title} from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';

export default class HomeScreen extends Component{
    state = {
      docs: [],
    };

    static navigationOptions = {
      headerTitle: "FIlmes"
    };

    componentDidMount(){
      this.loadFilms();
    }
    loadFilms = async () =>{
      try{
        await api.get(`/films`).then(response =>{
          const docs = response.data;
          docs.forEach(film => {
            if(film.cape_url){
              cape = film.cape_url.split("/");
              film.cape = `http://192.168.0.26:3001/capes/${cape[1]}`;
            }
          });
          this.setState({
            docs: docs,
          });
        });
      } catch (error){
        console.log(error);
      }
    };
    renderItem = ({item}) => (
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
    );

    render() {
      return (
        <View style={styles.container}>
          <View style={{height: 24, backgroundColor: "blue"}} />
          <Header>
            <Left>
              <Icon name="md-menu" style={{color:"white"}} onPress={()=>{this.props.navigation.dispatch(DrawerActions.toggleDrawer())}}></Icon>
            </Left>
            <Body>
              <Title>Filmes</Title>
            </Body>
          </Header>
          <FlatList
            contentContainerStyle={styles.list}
            data={this.state.docs}
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