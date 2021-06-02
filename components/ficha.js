import React from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  Button,
  Image
} from 'react-native';

const ficha = (props) => {
    return (
        <View>
            <Image
            source={{uri: imagenPeli(props) }}
            />
            <Text>Nombre: {props.originalTitle}</Text>
            <Text>Reparto:</Text>
            <Text>Año: {props.year}</Text>
            <Text>Descripción: {props.overview}</Text>
            <Button title='Buscar Otra'/>
            <Button title='Agregar a Favoritas'/>
        </View>
    )
}

const imagenPeli = (props) =>{
    return props.posterURLs[original]
}

const styles = StyleSheet.create({
    imagen: {
        width: 200,
        height: 200
    },

})

export default ficha;