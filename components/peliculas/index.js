import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { styles } from '../../styles';

export const Pelicula = ({ navigation, pelicula }) => {
  return (
    <View style={ownStyles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Ficha', { nombre: pelicula.originalTitle })
        }
      >
        <Image style={styles.thumbnail} source={{ uri: pelicula.posterURL }} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Ficha', { nombre: pelicula.originalTitle })
        }
      >
        <Text style={styles.buttonText}>{pelicula.originalTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const ownStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
});