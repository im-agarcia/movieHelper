import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Google from 'expo-google-app-auth';

import { styles } from '../../styles';

// const LOGIN_ERROR = 'Los datos ingresados no son válidos';
const GOOGLE_ERROR = 'No fue posible autenticarte con Google';

export const Login = ({ navigation }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const logIn = async () => {
    try {
      const { type, user } = await Google.logInAsync({
        iosClientId:
          '52587015902-5e6t1fr6feohecme6mgje9qngncs4ger.apps.googleusercontent.com',
        androidClientId:
          '52587015902-kl1ohhq2aar8hv3hvq5tfs04uv08krih.apps.googleusercontent.com',
      });

      if (type === 'success') {
        // Llamar a la API correspondiente para verificar los datos (pasarle user)

        // Si la información es incorrecta, activar el flag de error
        // setError(LOGIN_ERROR);

        // Si la información es correcta, navegar a Home
        navigation.navigate('Home');
      } else {
        setError(GOOGLE_ERROR);
      }
    } catch (e) {
      console.log(e);
      setError(GOOGLE_ERROR);
    }
  };

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
        placeholder="E-mail"
        placeholderTextColor="lightgray"
        textContentType="username"
        onChangeText={(email) => {
          setError('');
          setLoginData({ ...loginData, email });
        }}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.textInput}
        value={loginData.password}
        placeholder="Password"
        placeholderTextColor="lightgray"
        textContentType="password"
        onChangeText={(password) => {
          setError('');
          setLoginData({ ...loginData, password });
        }}
      />
      <TouchableOpacity
        style={styles.longButton}
        onPress={() => {
          setError('');
          // Llamar a la API correspondiente para verificar los datos (pasarle loginData)

          // Si la información es incorrecta, activar el flag de error
          // setError(LOGIN_ERROR);

          // Si la información es correcta, navegar a Home
          navigation.navigate('Home');
        }}
      >
        <Text style={styles.longButtonText}>INGRESAR</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setError('');
          logIn();
        }}
      >
        <Text style={styles.buttonText}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setError('');
          navigation.navigate('SignUp');
        }}
      >
        <Text style={styles.buttonText}>Crear cuenta</Text>
      </TouchableOpacity>
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};