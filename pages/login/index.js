import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from '../../styles';

const LOGIN_ERROR = 'Los datos ingresados no son válidos';
const GOOGLE_ERROR = 'No fue posible autenticarte con Google';
const ERROR = 'Hubo un error al intentar validar tus datos';
const API = 'http://localhost:3000';

export const Login = ({ navigation }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const logIn = async () => {
    setError('');

    try {
      // Verificamos si el user y la password son correctos
      const response = await fetch(
        `${API}/users/${loginData.email}/${loginData.password}`
      );
      const verifiedUser = await response.json();

      if (!verifiedUser?.message) {
        setLoginData({
          email: '',
          password: '',
        });

        // Si lo son, navegar a Home
        navigation.navigate('Home', { usuario: verifiedUser });
      } else {
        // Si no lo son, activar el flag de error
        setError(LOGIN_ERROR);
      }
    } catch (e) {
      setError(ERROR);
    }
  };

  const logInWithGoogle = async () => {
    setError('');
    setLoginData({
      email: '',
      password: '',
    });

    try {
      const { type, user } = await Google.logInAsync({
        iosClientId:
          '52587015902-5e6t1fr6feohecme6mgje9qngncs4ger.apps.googleusercontent.com',
        androidClientId:
          '52587015902-kl1ohhq2aar8hv3hvq5tfs04uv08krih.apps.googleusercontent.com',
      });

      if (type === 'success') {
        try {
          // Verificamos si el user existe
          const response = await fetch(`${API}/users/${user.email}`);
          const existingUser = await response.json();

          if (!existingUser?.message) {
            // Si existe, navegar a Home
            navigation.navigate('Home', { usuario: existingUser });
          } else {
            // Si no existe, activar el flag de error
            setError(LOGIN_ERROR);
          }
        } catch (e) {
          setError(ERROR);
        }
      } else {
        setError(GOOGLE_ERROR);
      }
    } catch (e) {
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
        autoCapitalize="none"
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
        autoCapitalize="none"
        onChangeText={(password) => {
          setError('');
          setLoginData({ ...loginData, password });
        }}
      />
      <TouchableOpacity style={styles.longButton} onPress={logIn}>
        <Text style={styles.longButtonText}>INGRESAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rowContainer} onPress={logInWithGoogle}>
        <FontAwesome name="google" size={24} color="white" />
        <Text style={styles.buttonText}>Ingresar con Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setError('');
          setLoginData({
            email: '',
            password: '',
          });
          navigation.navigate('SignUp');
        }}
      >
        <Text style={styles.buttonText}>Crear cuenta</Text>
      </TouchableOpacity>
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};