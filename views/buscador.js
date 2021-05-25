import React from 'react'
import {View, StyleSheet, Button, Text, TextInput} from 'react-native'

const buscador = () =>{
    return (<View>
        <TextInput style={Style.textInput} placeholder='Nombre de la película'></TextInput>
          <Button title='Buscar'/>
    </View>)
}




const Style = StyleSheet.create({
textInput:{
    height: 40,
    border: 'solid grey',
    borderRadius: 8
  }
})

export default buscador()