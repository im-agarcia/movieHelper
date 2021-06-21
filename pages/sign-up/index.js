import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from '../../styles';

const SIGNIN_ERROR = 'Error al crear usuario';
const API = 'http://localhost:3000';

export const SignUp = ({ navigation }) => {
  const [loginData, setLoginData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);

  const signIn = async () => {
    setError('');

    try {
      
      const Data = {
        nombre: loginData.nombre,
        apellido: loginData.apellido,
        email: loginData.email,
        password: loginData.password
      };

      const jsonBody = JSON.stringify(Data)

      // Mando a crear el user
      const response = await fetch(
        `${API}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: jsonBody
        }
      );
      
      const createdUser = await response.json();

      if (!createdUser?.message) {
        console.log(createdUser)
        setLoginData({
          nombre: '',
          apellido: '',
          email: '',
          password: '',
        });

        // Si la creacion fue exitosa, vamos a la home
        navigation.navigate('Home', { nombreUsuario: createdUser.nombre });
      } else {
        setError(SIGNIN_ERROR);
      }
    } catch (e) {
      setError(SIGNIN_ERROR);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/MovieHelper.png')}
      />
      <Text style={styles.title}>Ingresá tus datos</Text>
      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.textInput}
        value={loginData.nombre}
        placeholder="Nombre"
        placeholderTextColor="lightgray"
        textContentType="name"
        onChangeText={(nombre) => setLoginData({ ...loginData, nombre })}
      />
      <Text style={styles.label}>Apellido</Text>
      <TextInput
        style={styles.textInput}
        value={loginData.apellido}
        placeholder="Apellido"
        placeholderTextColor="lightgray"
        textContentType="familyName"
        onChangeText={(apellido) => setLoginData({ ...loginData, apellido })}
      />
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.textInput}
        value={loginData.email}
        placeholder="E-mail"
        placeholderTextColor="lightgray"
        textContentType="username"
        autoCapitalize="none"
        onChangeText={(email) => setLoginData({ ...loginData, email })}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.textInput}
        value={loginData.password}
        placeholder="Password"
        placeholderTextColor="lightgray"
        textContentType="newPassword"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(password) => setLoginData({ ...loginData, password })}
      />
      <TouchableOpacity
        style={styles.longButton}
        onPress={signIn}
      >
        <Text style={styles.longButtonText}>CREAR CUENTA</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setLoginData({
            nombre: '',
            apellido: '',
            email: '',
            password: '',
          });
          navigation.goBack();
        }}
      >
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
      {!!error && (
        <Text style={styles.error}>Hubo un error creando tu cuenta</Text>
      )}
    </View>
  );
};