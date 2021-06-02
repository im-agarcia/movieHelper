import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, StatusBar } from 'react-native';

// Cambié el nombre porque los componentes se nombran en mayúscula por convención
export function Listado({ navigation, route }) {
  // Refactor: incluir el if dentro del useEffect, hacerlo al revés no está recomendado:
  // https://es.reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
  const { nombre } = route.params || { nombre: '' };
  if (nombre != '') {
    useEffect(() => {
      navigation.setOptions({ title: 'Resultados de: ' + nombre });
    }, []);
  } else {
    useEffect(() => {
      navigation.setOptions({ title: 'Peliculas' });
    }, []);
  }

  return (
    <View style={Style.container}>
      {/* <Button title= {props.title} type= {peliculaIcono} onClick={ficha(props)}/> */}
      <Text>Title: {nombre}</Text>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

// Refactor: crear un file por componente
const PeliculaIcono = (props) => {
  return props.posterURLs[original];
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'azure',
  },
});
