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

const API = 'http://localhost:3000';

export function Favoritas({ navigation, route }) {
  const { usuario } = route.params || {};
  const [loading, setLoading] = useState(false);
  const [favoritas, setFavoritas] = useState([]);

  const getPeliculasFavoritas = async (usuario) => {
    try {
      setLoading(true);

      const response = await fetch(`${API}/users/${usuario.email}`);
      const updatedUser = await response.json();

      if (!updatedUser?.message) {
        setFavoritas(updatedUser.favoritos);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPeliculasFavoritas(usuario);
  }, [usuario]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoSmall}
        source={require('../../assets/MovieHelper-small.png')}
      />
      <Text style={styles.title}>Tus películas favoritas</Text>
      {loading ? (
        <Text style={styles.text}>Aguardá un momento...</Text>
      ) : favoritas.length ? (
        <ScrollView>
          <View style={styles.rowContainer}>
            {favoritas.map((p, i) => (
              <View style={ownStyles.container} key={`film${i}`}>
                <Text style={styles.text}>{p.filmId}</Text>
                {/* <Pelicula
                  key={`film${i}`}
                  navigation={navigation}
                  pelicula={p}   ##REVISAR!!!
                  usuario={usuario}
                /> */}
              </View>
            ))}
          </View>
        </ScrollView>
      ) : (
        <Text style={styles.text}>Aún no tenés películas favoritas</Text>
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