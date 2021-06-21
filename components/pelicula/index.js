import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

import { styles } from '../../styles';

export const Pelicula = ({ navigation, pelicula, usuario }) => (
  <View style={ownStyles.container}>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Ficha', {
          pelicula,
          usuario,
        })
      }
    >
      <Image
        style={styles.thumbnail}
        source={{
          uri: pelicula.posterURLs.original.replace('https', 'http'),
        }}
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Ficha', {
          pelicula,
          usuario,
        })
      }
    >
      <Text style={styles.buttonText}>
        {usuario.favoritos.some((f) => f.filmId == pelicula.imdbID) ? (
          <FontAwesome name="star" size={12} color="white" />
        ) : (
          <Feather name="star" size={12} color="white" />
        )}{' '}
        {pelicula.originalTitle}
      </Text>
    </TouchableOpacity>
  </View>
);

const ownStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
});