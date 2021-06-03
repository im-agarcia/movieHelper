import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
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

// Cambié el nombre porque los componentes se nombran en mayúscula por convención
export function Home({ navigation }) {
  const [nombre, setNombre] = useState('');

  return (
    <View style={Style.container}>
      <Text style={Style.title}>Movie Helper</Text>
      <TextInput
        style={Style.textInput}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Nombre de la película"
      />
      <Button
        title="Buscar"
        onPress={() => {
          navigation.navigate('Listado', { nombre });
        }}
      />
      <View style={Style.buttonContainer}>
        <Button title={'Netflix'} />
        <Text>  </Text>
        <Button title={'Prime Video'}/>
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  textInput: {
    height: 40,
    borderStyle: 'solid',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    padding: 5,
    width: '70%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'azure',
  },
  title: {
    fontSize: 30,
    margin: 10,
    padding: 5
  },
  buttonContainer: {
    marginTop: 25,
    padding: 10,
    flexDirection: 'row',
    alignSelf: 'center'
  }
});
