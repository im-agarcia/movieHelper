import React, {Component} from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  AppRegistry,
  Button
} from 'react-native';

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
          <Text style={styles.welcome}>
            Movie Helper!
          </Text>
          <Text>

          </Text>
          <Text>

          </Text>
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

    }
  })