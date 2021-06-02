import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

export const SignUp = ({ navigation }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);

  return (
    <View style={Style.container}>
      <Text style={Style.title}>Ingresá tus datos</Text>
      <Text style={Style.label}>E-mail</Text>
      <TextInput
        style={Style.textInput}
        value={loginData.email}
        placeholder="E-mail..."
        textContentType="username"
        onChangeText={(email) => setLoginData({ ...loginData, email })}
      />
      <Text style={Style.label}>Password</Text>
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
          // Llamar a la API correspondiente para crear una cuenta (pasarle loginData)

          // Si hubo algún error, activar el flag de error
          // setError(true);

          // Si la cuenta se creó correctamente, navegar a Home
          navigation.navigate('Home');
        }}
      >
        <Text style={Style.text}>CREAR CUENTA</Text>
      </TouchableOpacity>
      {error && (
        <Text style={Style.error}>Hubo un error creando tu cuenta</Text>
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
  label: {
    color: 'black',
    fontSize: 10,
    width: '70%',
    textAlign: 'left',
    padding: 5,
  },
  error: {
    color: 'red',
    fontSize: 11,
    margin: 10,
  },
});
