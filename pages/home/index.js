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

export function Home({ navigation }) {
  const [nombre, setNombre] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoSmall}
        source={require('../../assets/MovieHelper-small.png')}
      />
      <Text style={styles.title}>Buscador de películas</Text>
      <TextInput
        style={styles.textInput}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Ingresá el nombre de la película"
        placeholderTextColor="lightgray"
      />
      <TouchableOpacity
        style={styles.longButton}
        onPress={() => navigation.navigate('Listado', { nombre })}
      >
        <Text style={styles.longButtonText}>Buscar</Text>
      </TouchableOpacity>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Listado')}>
          <Image
            style={ownStyles.thumbnail}
            source={require('../../assets/netflix.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Listado')}>
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
  thumbnail: {
    width: 75,
    height: 50,
    resizeMode: 'contain',
    marginHorizontal: 15,
  },
  button: {
    position: 'absolute',
    bottom: '10%',
  },
});