import React from 'react'
import { View, 
    Text, 
    StyleSheet, 
    Button,
    Image} from "react-native";
import ficha from '../components/ficha'

const listado =(props)=> {
    return(
        <View>
         <Button title= {props.title} type= {peliculaIcono} onClick={ficha(props)}/>
        </View>
    );
};

const peliculaIcono = (props) =>{
    return props.posterURLs[original]
}

export default listado;