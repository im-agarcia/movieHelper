import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from '../../styles';

export const Login = ({ navigation }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/MovieHelper.png')}
      />
      <Text style={styles.title}>Ingresar a la plataforma</Text>
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.textInput}
        value={loginData.email}
        placeholder="E-mail..."
        placeholderTextColor="lightgray"
        textContentType="username"
        onChangeText={(email) => setLoginData({ ...loginData, email })}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.textInput}
        value={loginData.password}
        placeholder="Password..."
        placeholderTextColor="lightgray"
        textContentType="password"
        onChangeText={(password) => setLoginData({ ...loginData, password })}
      />
      <TouchableOpacity
        style={styles.longButton}
        onPress={() => {
          // Llamar a la API correspondiente para verificar los datos (pasarle loginData)

          // Si la información es incorrecta, activar el flag de error
          // setError(true);

          // Si la información es correcta, navegar a Home
          navigation.navigate('Home');
        }}
      >
        <Text style={styles.longButtonText}>INGRESAR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Crear cuenta</Text>
      </TouchableOpacity>
      {error && (
        <Text style={styles.error}>Los datos ingresados no son válidos</Text>
      )}
    </View>
  );
};