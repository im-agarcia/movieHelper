import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from '../../styles';
import { Imagen } from '../../components/imagen';
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
    <View>
      <Imagen uri={pelicula.posterURL} />
      <Text>Nombre: {pelicula.originalTitle}</Text>
      <Text>Reparto:</Text>
      {(pelicula.cast || []).map((actor) => (
        <Text key={actor}>{actor}</Text>
      ))}
      <Text>Año: {pelicula.year}</Text>
      <Text>Descripción: {pelicula.overview}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Buscar otra película</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => null}>
        <Text style={styles.text}>Agregar a favoritas</Text>
      </TouchableOpacity>
    </View>
  );
};
