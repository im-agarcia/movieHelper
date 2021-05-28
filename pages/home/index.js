import {StatusBar} from "expo-status-bar"
import React from 'react';
import { View, Text, TextInput, StyleSheet, AppRegistry, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function index ({navigation}) {
    return (<View style={Style.container}>
        <TextInput style={Style.textInput} placeholder='Nombre de la película'></TextInput>
          <Button title='Buscar' onPress={() =>{navigation.navigate("Listado")}}/>
    </View>)
}


const Style = StyleSheet.create({
textInput:{
    height: 40,
    border: 'solid grey',
    borderRadius: 8
  },
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'azure'     
  }
})
