import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  AppRegistry,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Listado, Login, SignUp } from './pages';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen 
        name="Listado" 
        component={Listado} 
        options={{ title: 'Peliculas' }}/>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: 'Crear cuenta' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'azure',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'blue',
  },
  textInput: {
    height: 40,
    borderStyle: 'solid',
    borderColor: 'grey',
    borderRadius: 8,
  },
});
