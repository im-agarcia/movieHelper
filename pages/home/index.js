import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from '../../styles';

export function Home({ navigation }) {
  const [nombre, setNombre] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Helper</Text>
      <TextInput
        style={styles.textInput}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Ingrese el nombre de la película"
        placeholderTextColor="lightgray"
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Listado', { nombre })}
      >
        <Text style={styles.text}>Buscar</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Listado')}>
          <Text style={styles.text}>Netflix</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Listado')}>
          <Text style={styles.text}>Prime Video</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
