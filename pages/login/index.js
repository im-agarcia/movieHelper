import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

export const Login = ({ navigation }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);

  return (
    <View style={Style.container}>
      <Text style={Style.title}>Ingresar a la plataforma</Text>
      <TextInput
        style={Style.textInput}
        value={loginData.email}
        placeholder="E-mail..."
        textContentType="username"
        onChangeText={(email) => setLoginData({ ...loginData, email })}
      />
      <TextInput
        style={Style.textInput}
        value={loginData.password}
        placeholder="Password..."
        textContentType="password"
        onChangeText={(password) => setLoginData({ ...loginData, password })}
      />
      <TouchableOpacity
        style={Style.button}
        onPress={() => {
          // Llamar a la API correspondiente para verificar los datos (pasarle loginData)

          // Si la información es incorrecta, activar el flag de error
          // setError(true);

          // Si la información es correcta, navegar a Home
          navigation.navigate('Home');
        }}
      >
        <Text style={Style.text}>INGRESAR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={Style.text}>Crear cuenta</Text>
      </TouchableOpacity>
      {error && (
        <Text style={Style.error}>Los datos ingresados no son válidos</Text>
      )}
    </View>
  );
};

const Style = StyleSheet.create({
  textInput: {
    height: 40,
    borderStyle: 'solid',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    padding: 5,
    width: '70%',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'azure',
    paddingTop: '25%',
  },
  button: {
    width: '80%',
    backgroundColor: 'lightblue',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginTop: '5%',
  },
  title: {
    color: 'black',
    fontSize: 30,
    margin: 10,
    marginBottom: '10%',
  },
  text: {
    color: 'black',
    fontSize: 11,
    margin: 10,
  },
  error: {
    color: 'red',
    fontSize: 11,
    margin: 10,
  },
});
