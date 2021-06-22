import React, { useState, useLayoutEffect } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { styles } from '../../styles';
import { getUser } from '../../services';

export function Home({ navigation, route }) {
  const [usuario, setUsuario] = useState({});
  const [nombrePelicula, setNombrePelicula] = useState('');

  useEffect(() => {
    getUser(route.params.usuario.email, setUsuario);
  }, [route.params.usuario]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
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
      <Text style={styles.title}>Buscador de películas</Text>
      <TextInput
        style={styles.textInput}
        value={nombrePelicula}
        onChangeText={setNombrePelicula}
        placeholder="Ingresá el nombre de la película"
        placeholderTextColor="lightgray"
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={styles.longButton}
        onPress={() =>
          navigation.navigate('Listado', { usuario, nombrePelicula })
        }
      >
        <Text style={styles.longButtonText}>Buscar</Text>
      </TouchableOpacity>
      <Text style={ownStyles.title}>Buscador por servicios de streaming</Text>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Listado', { usuario, servicio: 'netflix' })
          }
        >
          <Image
            style={ownStyles.thumbnail}
            source={require('../../assets/netflix.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Listado', { usuario, servicio: 'prime' })
          }
        >
          <Image
            style={ownStyles.thumbnail}
            source={require('../../assets/prime-video.png')}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={ownStyles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const ownStyles = StyleSheet.create({
  title: {
    margin: 10,
    marginTop: '10%',
    color: 'white',
    fontSize: 16,
    fontWeight: '300',
  },
  thumbnail: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  button: {
    position: 'absolute',
    bottom: '10%',
  },
});