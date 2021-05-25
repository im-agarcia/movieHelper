import React, {Component} from 'react';
import {
  View, 
  Text, 
  TextInput,
  StyleSheet, 
  AppRegistry,
  Button
} from 'react-native';

import buscador from './views/buscador'



  export default class MovieHelper extends Component{
    constructor(){
      super()

      this.state ={
        status: false,
        data: null
      }
    }


    render(){
      return(
        <View style={styles.container}>
          <Text style={styles.welcome}> Movie Helper! </Text>
        {buscador}
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'azure'     
    },
    welcome:{
      fontSize: 20,
      textAlign: 'center',
      color: 'blue',

    },
    textInput:{
      height: 40,
      border: 'solid grey',
      borderRadius: 8
    }
  })
