import React, { useState, useLayoutEffect, useEffect } from 'react';
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
import { getUser } from '../../services';

const API = 'http://localhost:3000';

export const Ficha = ({ navigation, route }) => {
  const { pelicula, goBackTitle } = route.params;
  const [usuario, setUsuario] = useState({});
  const [favorita, setFavorita] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const addFavorita = async (u, p) => {
    try {
      // Intento agregar la película a favoritas
      const response = await fetch(`${API}/users/${u._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(p),
      });
      const updatedUser = await response.json();

      if (!updatedUser?.message) {
        setUsuario(updatedUser);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const removeFavorita = async (u, p) => {
    try {
      // Intento remover la película de favoritas
      const response = await fetch(`${API}/users/${u._id}/${p.imdbID}`, {
        method: 'PUT',
      });
      const updatedUser = await response.json();

      if (!updatedUser?.message) {
        setUsuario(updatedUser);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUser(route.params.usuario.email, setUsuario);
  }, [route.params.usuario]);

  useEffect(() => {
    setFavorita(usuario.favoritos?.some((f) => f.imdbID === pelicula.imdbID));
  }, [usuario, pelicula]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: goBackTitle,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {usuario ? (
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Favoritas', { usuario })}
          >
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
              uri: pelicula.posterURLs?.original.replace('https', 'http'),
            }}
          />
        </View>
        <View style={ownStyles.rowContainer}>
          {favorita ? (
            <TouchableOpacity onPress={() => removeFavorita(usuario, pelicula)}>
              <Text style={ownStyles.buttonText}>
                Eliminar de favoritas{' '}
                <FontAwesome name="star" size={12} color="black" />
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => addFavorita(usuario, pelicula)}>
              <Text style={ownStyles.buttonText}>
                Agregar a favoritas{' '}
                <Feather name="star" size={12} color="black" />
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <Text style={ownStyles.text}>Nombre: {pelicula.originalTitle}</Text>
        <Text style={ownStyles.text}>Reparto: {pelicula.cast?.join(', ')}</Text>
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