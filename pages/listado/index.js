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

const RESULTADOS = 'Resultados para: ';
const BUSCADOR = 'Listado de películas';
const API = 'http://localhost:3000';

export function Listado({ navigation, route }) {
  const { nombrePelicula, usuario, servicio } = route.params || {};
  const [loading, setLoading] = useState(false);
  const [peliculasEncontradas, setPeliculasEncontradas] = useState([]);

  const getPeliculas = async (nombrePelicula, servicio) => {
    try {
      setLoading(true);

      const response = await fetch(
        `${API}/movies${servicio ? `?service=${servicio}` : ''}`
      );
      const peliculas = await response.json();

      if (peliculas.length) {
        setPeliculasEncontradas(
          nombrePelicula
            ? peliculas.filter(({ originalTitle }) =>
                originalTitle
                  .toUpperCase()
                  .includes(nombrePelicula.toUpperCase())
              )
            : peliculas
        );
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (nombrePelicula) {
      navigation.setOptions({ title: RESULTADOS + nombrePelicula });
    }

    getPeliculas(nombrePelicula, servicio);
  }, [nombrePelicula, servicio]);

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
      <Text style={styles.title}>
        {nombrePelicula ? RESULTADOS + nombrePelicula : BUSCADOR}
      </Text>
      {loading ? (
        <Text style={styles.text}>Estamos buscando...</Text>
      ) : peliculasEncontradas.length ? (
        <ScrollView>
          <View style={styles.rowContainer}>
            {peliculasEncontradas.map((p, i) => (
              <View style={ownStyles.container} key={`film${i}`}>
                <Pelicula
                  key={`film${i}`}
                  navigation={navigation}
                  pelicula={p}
                  usuario={usuario}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      ) : (
        <Text style={styles.text}>
          No se encontraron películas con ese nombre
        </Text>
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