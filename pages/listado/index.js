import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { styles } from '../../styles';
import { Pelicula } from '../../components';
import { peliculas } from '../../data';

const RESULTADOS = 'Resultados para: ';
const BUSCADOR = 'Listado de películas';

export function Listado({ navigation, route }) {
  const { nombre } = route.params || {};
  const [peliculasEncontradas, setPeliculasEncontradas] = useState([]);
  useEffect(() => {
    if (nombre) {
      navigation.setOptions({ title: RESULTADOS + nombre });
      setPeliculasEncontradas(
        peliculas.filter(({ originalTitle }) =>
          originalTitle.toUpperCase().includes(nombre.toUpperCase())
        )
      );
    }
  }, [nombre]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoSmall}
        source={require('../../assets/MovieHelper-small.png')}
      />
      <Text style={styles.title}>
        {nombre ? RESULTADOS + nombre : BUSCADOR}
      </Text>
      {nombre ? (
        peliculasEncontradas.length ? (
          <ScrollView>
            <View style={styles.rowContainer}>
              {peliculasEncontradas.map((p, i) => (
                <View style={ownStyles.container} key={`film${i}`}>
                  <Pelicula
                    key={`film${i}`}
                    navigation={navigation}
                    pelicula={p}
                  />
                </View>
              ))}
            </View>
          </ScrollView>
        ) : (
          <Text style={styles.text}>
            No se encontraron películas con ese nombre
          </Text>
        )
      ) : (
        <ScrollView>
          <View style={styles.rowContainer}>
            {peliculas.map((p, i) => (
              <View style={ownStyles.container} key={`film${i}`}>
                <Pelicula
                  key={`film${i}`}
                  navigation={navigation}
                  pelicula={p}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      )}
      <TouchableOpacity
        style={styles.longButton}
        onPress={() => navigation.goBack()}
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
});