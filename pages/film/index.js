import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Button, 
  Image 
} from 'react-native';


export const Ficha = (props) => {
  return (
    <View>
      <Image style={styles.imagen} source={{ uri: ImagenPeli(props) }} />
      <Text>Nombre: {props.originalTitle}</Text>
      <Text>Reparto:</Text>
      <Text>Año: {props.year}</Text>
      <Text>Descripción: {props.overview}</Text>
      <Button title="Buscar Otra" />
      <Button title="Agregar a Favoritas" />
    </View>
  );
};

// Cambié el nombre porque los componentes se nombran en mayúscula por convención
const ImagenPeli = (props) => {
  return props.posterURLs[original];
};

const styles = StyleSheet.create({
  imagen: {
    width: 200,
    height: 200,
  },
});

export default Ficha;
