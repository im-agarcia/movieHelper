import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { styles } from '../../styles';
import { peliculas } from '../../data';

export const Ficha = ({ navigation, route }) => {
  const { nombre } = route.params || {};
  const [pelicula, setPelicula] = useState({});

  useEffect(() => {
    if (nombre) {
      setPelicula(
        peliculas.find(({ originalTitle }) => originalTitle.includes(nombre)) ||
          {}
      );
    }
  }, [nombre]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoSmall}
        source={require('../../assets/MovieHelper-small.png')}
      />
      <Text style={styles.title}>Ficha de la película</Text>
      <View style={ownStyles.container}>
        <View style={ownStyles.rowContainer}>
          <Image style={styles.image} source={{ uri: pelicula.posterURL }} />
        </View>
        <Text style={ownStyles.text}>Nombre: {pelicula.originalTitle}</Text>
        <Text style={ownStyles.text}>Reparto:</Text>
        {(pelicula.cast || []).map((actor, i) => (
          <Text style={ownStyles.text} key={`actor${i}`}>
            {actor}
          </Text>
        ))}
        <Text style={ownStyles.text}>Año: {pelicula.year}</Text>
        <Text style={ownStyles.text}>Descripción: {pelicula.overview}</Text>
        <View style={ownStyles.rowContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={ownStyles.buttonText}>Buscar otra película</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => null}>
            <Text style={ownStyles.buttonText}>Agregar a favoritas</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ownStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    margin: 2.5,
    color: 'black',
    fontSize: 13,
  },
  buttonText: {
    color: 'black',
    fontSize: 13,
    fontWeight: '600',
    margin: 10,
    marginTop: '10%',
  },
});