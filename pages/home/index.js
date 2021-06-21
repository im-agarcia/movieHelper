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

export function Home({ navigation, route }) {
  const { nombreUsuario } = route.params || {};
  const [nombrePelicula, setNombrePelicula] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
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
          navigation.navigate('Listado', { nombreUsuario, nombrePelicula })
        }
      >
        <Text style={styles.longButtonText}>Buscar</Text>
      </TouchableOpacity>
      <Text style={ownStyles.title}>Buscador por servicios de streaming</Text>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Listado', { nombreUsuario })}
        >
          <Image
            style={ownStyles.thumbnail}
            source={require('../../assets/netflix.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Listado', { nombreUsuario })}
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