import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

import { styles } from '../../styles';
import { peliculas } from '../../data';

export const Ficha = ({ navigation, route }) => {
  const { nombrePelicula, nombreUsuario } = route.params || {};
  const [pelicula, setPelicula] = useState({});
  const [favorita, setFavorita] = useState(false);

  useEffect(() => {
    if (nombrePelicula) {
      setPelicula(
        peliculas.find(({ originalTitle }) =>
          originalTitle.includes(nombrePelicula)
        ) || {}
      );
    }
  }, [nombrePelicula]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Listado',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {nombreUsuario ? (
        <View style={styles.header}>
          <TouchableOpacity onPress={() => null}>
            <Text style={styles.buttonText}>{`Hola, ${nombreUsuario}`}</Text>
          </TouchableOpacity>
        </View>
      ) : null}
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
          <TouchableOpacity onPress={() => setFavorita(!favorita)}>
            {favorita ? (
              <Text style={ownStyles.buttonText}>
                Eliminar de favoritas{' '}
                <FontAwesome name="star" size={12} color="black" />
              </Text>
            ) : (
              <Text style={ownStyles.buttonText}>
                Agregar a favoritas{' '}
                <Feather name="star" size={12} color="black" />
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.longButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={ownStyles.longButton}>Buscar otra película</Text>
      </TouchableOpacity>
    </View>
  );
};

const ownStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    textAlignVertical: 'center',
    margin: 0,
    marginTop: 10,
  },
});