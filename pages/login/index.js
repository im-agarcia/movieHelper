import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

import { styles } from '../../styles';

export const Login = ({ navigation }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresar a la plataforma</Text>
      <TextInput
        style={styles.textInput}
        value={loginData.email}
        placeholder="E-mail..."
        placeholderTextColor="lightgray"
        textContentType="username"
        onChangeText={(email) => setLoginData({ ...loginData, email })}
      />
      <TextInput
        style={styles.textInput}
        value={loginData.password}
        placeholder="Password..."
        placeholderTextColor="lightgray"
        textContentType="password"
        onChangeText={(password) => setLoginData({ ...loginData, password })}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Llamar a la API correspondiente para verificar los datos (pasarle loginData)

          // Si la información es incorrecta, activar el flag de error
          // setError(true);

          // Si la información es correcta, navegar a Home
          navigation.navigate('Home');
        }}
      >
        <Text style={styles.text}>INGRESAR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.text}>Crear cuenta</Text>
      </TouchableOpacity>
      {error && (
        <Text style={styles.error}>Los datos ingresados no son válidos</Text>
      )}
    </View>
  );
};
