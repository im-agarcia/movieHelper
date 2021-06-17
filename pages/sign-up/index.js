import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

import { styles } from '../../styles';

export const SignUp = ({ navigation }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresá tus datos</Text>
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
        style={styles.button}
        onPress={() => {
          // Llamar a la API correspondiente para crear una cuenta (pasarle loginData)

          // Si hubo algún error, activar el flag de error
          // setError(true);

          // Si la cuenta se creó correctamente, navegar a Home
          navigation.navigate('Home');
        }}
      >
        <Text style={styles.text}>CREAR CUENTA</Text>
      </TouchableOpacity>
      {error && (
        <Text style={styles.error}>Hubo un error creando tu cuenta</Text>
      )}
    </View>
  );
};
