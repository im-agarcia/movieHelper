import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Button, Image, StatusBar} from "react-native";

export default function listado ({navigation, route}){
 const {nombre} = route.params || {nombre: ""}
 if (nombre != "") {
    useEffect(() => {
        navigation.setOptions({title: "Resultados de: " + nombre})
    }, []) 
 }else{
    useEffect(() => {
        navigation.setOptions({title: "Peliculas"})
    }, []) 
 }
    
    return(
        <View style={Style.container}>
         {/* <Button title= {props.title} type= {peliculaIcono} onClick={ficha(props)}/> */}
         <Text>Title: {nombre}</Text>
         <Button 
         title='Go Back'
         onPress={() => {navigation.goBack()}}
         />
         <StatusBar style="auto" />
        </View>
    );
};

const peliculaIcono = (props) =>{
    return props.posterURLs[original]
}

const Style = StyleSheet.create({
      container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'azure'     
      }
    })