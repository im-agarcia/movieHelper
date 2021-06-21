import React, { useState, useLayoutEffect } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

import { styles } from '../../styles';

export const Ficha = ({ navigation, route }) => {
  const { pelicula, usuario } = route.params || {};
  const [collapsed, setCollapsed] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Listado',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {usuario ? (
        <View style={styles.header}>
          <TouchableOpacity onPress={() => null}>
            <Text style={styles.buttonText}>{`Hola, ${usuario.nombre}`}</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <Image
        style={styles.logoSmall}
        source={require('../../assets/MovieHelper-small.png')}
      />
      <Text style={styles.title}>Ficha de la película</Text>
      <ScrollView style={ownStyles.container}>
        <View style={ownStyles.rowContainer}>
          <Image
            style={styles.image}
            source={{
              uri: pelicula.posterURLs.original.replace('https', 'http'),
            }}
          />
        </View>
        <View style={ownStyles.rowContainer}>
          <TouchableOpacity onPress={() => null}>
            {usuario.favoritos.some((f) => f.filmId == pelicula.imdbID) ? (
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
        <Text style={ownStyles.text}>Nombre: {pelicula.originalTitle}</Text>
        <Text style={ownStyles.text}>Reparto: {pelicula.cast.join(', ')}</Text>
        <Text style={ownStyles.text}>Año: {pelicula.year}</Text>
        {collapsed ? (
          <Text style={ownStyles.text} ellipsizeMode="tail" numberOfLines={2}>
            Descripción: {pelicula.overview}
          </Text>
        ) : (
          <Text style={ownStyles.text}>Descripción: {pelicula.overview}</Text>
        )}
        <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
          <Text style={{ ...ownStyles.text, fontWeight: '600' }}>
            {collapsed ? 'Leer más' : 'Leer menos'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity
        style={styles.longButton}
        onPress={() => navigation.navigate('Home', { usuario })}
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
    marginHorizontal: 20,
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
    margin: 10,
  },
});