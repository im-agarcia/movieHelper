import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { styles } from '../../styles';
import { getUser } from '../../services';
import { Pelicula } from '../../components';

const API = 'http://localhost:3000';

export function Favoritas({ navigation, route }) {
  const { goBackTitle } = route.params;
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    getUser(route.params.usuario.email, setUsuario);
  }, [route.params.usuario]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: goBackTitle,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoSmall}
        source={require('../../assets/MovieHelper-small.png')}
      />
      <Text style={styles.title}>Tus películas favoritas</Text>
      {usuario.favoritos?.length ? (
        <ScrollView>
          <View style={styles.rowContainer}>
            {usuario.favoritos.map((p, i) => (
              <View style={ownStyles.container} key={`film${i}`}>
                <Pelicula
                  key={`film${i}`}
                  navigation={navigation}
                  pelicula={p}
                  usuario={usuario}
                  goBackTitle="Favoritas"
                />
              </View>
            ))}
          </View>
        </ScrollView>
      ) : (
        <Text style={styles.text}>Aún no tenés películas favoritas</Text>
      )}
      <TouchableOpacity
        style={styles.longButton}
        onPress={() => {
          navigation.setParams({ usuario });
          navigation.goBack();
        }}
      >
        <Text style={styles.longButtonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const ownStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '50%',
  },
})