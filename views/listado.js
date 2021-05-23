import React from 'react'
import { View, 
    Text, 
    StyleSheet, 
    Button,
    Image} from "react-native";

const listado =(props)=> {
    return(
        <View>
            <text>Titulo: </text>
            <button type= {peliculaIcono} />
        </View>
    );
};

const peliculaIcono = (props) =>{
    return props.posterURLs[original]
}

export default listado;