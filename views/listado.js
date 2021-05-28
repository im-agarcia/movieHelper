import React from 'react'
import { View, 
    Text, 
    StyleSheet, 
    Button,
    Image,
    StatusBar} from "react-native";
import ficha from '../components/ficha'

export default function listado ({navigation}){
    return(
        <View style={Style.container}>
         {/* <Button title= {props.title} type= {peliculaIcono} onClick={ficha(props)}/> */}
         <Text>Title: I see u</Text>
         <Button 
         title='Go Back'
         onPress={() => navigation.goBack()}
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

 listado;