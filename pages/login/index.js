import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { FontAwesome } from '@expo/vector-icons';

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
        navigation.navigate('Home', { nombreUsuario: user.name });
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
        autoCapitalize={false}
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
        secureTextEntry={true}
        autoCapitalize={false}
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
          navigation.navigate('Home', { nombreUsuario: loginData.nombre });
          setLoginData({
            email: '',
            password: '',
          });
        }}
      >
        <Text style={styles.longButtonText}>INGRESAR</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() => {
          setLoginData({
            email: '',
            password: '',
          });
          setError('');
          logIn();
        }}
      >
        <FontAwesome name="google" size={24} color="white" />
        <Text style={styles.buttonText}>Ingresar con Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setLoginData({
            email: '',
            password: '',
          });
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