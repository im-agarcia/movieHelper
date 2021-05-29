import React from 'react';
import {View, Text, TextInput, StyleSheet, AppRegistry, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './pages/home/index'
import Listado from "./components/listado";

const Stack = createStackNavigator();

  export default function App() {
          return(
            <NavigationContainer>
              <Stack.Navigator initialRouteName={'Login'}>
                <Stack.Screen name= 'Home' component= {Home}/>
                <Stack.Screen name= 'Listado' component= {Listado}/>
                <Stack.Screen name= 'Login' component= {Login}/>
              </Stack.Navigator>
            </NavigationContainer>

      )
    };


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
