import React, {Component} from 'react';
import {
  View,
  Text, 
  StyleSheet,
  TextInput,
  Button, 
} from 'react-native';
import ficha from './components/ficha' 

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
          <Text style={styles.welcome}>MovieHelper!</Text>
          <TextInput style={styles.textInput} placeholder='Nombre de la película'>
          </TextInput><Button title='Buscar'/>
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
      fontSize: 40,
      textAlign: 'center',
      color: 'blue',
    },
    textInput:{
      height: 40,
      border: 'solid grey',
      borderRadius: 8
    }
  })