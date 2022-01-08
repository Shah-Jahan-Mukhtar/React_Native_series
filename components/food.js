import React  from "react";
import { View,StyleSheet,Text } from "react-native";


const Food=(props)=>{

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.name}</Text>
        </View>
    )
};

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#DFFF00',
        padding:10,
        marginBottom:10,
        height:200,
        paddingHorizontal:10,
        alignItems:'center',
        justifyContent:'center',
        borderTopLeftRadius:80,
        borderBottomEndRadius:80,
        borderColor:"black",
        borderWidth:5
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
        color:'red'
    
    }
})

export default Food;