import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

import { styles } from '../../styles';

export const Pelicula = ({ navigation, pelicula }) => {
  const [favorita] = useState(true);
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
        <Text style={styles.buttonText}>
          {favorita ? (
            <Feather name="star" size={12} color="white" />
          ) : (
            <FontAwesome name="star" size={12} color="white" />
          )}{' '}
          {pelicula.originalTitle}
        </Text>
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