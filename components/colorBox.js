import react from "react";
import { View,Text ,StyleSheet } from "react-native";


const Colors=(props)=>{
    const BoxColor={
        backgroundColor:props.hexCode,
    };
    const textStyle = {
        color:
          parseInt(props.hexCode.replace("#", ""), 16) > 0xffffff / 1.1
            ? "black"
            : "white",
      };


    return(

        <View style={[styles.container,BoxColor]}>
            <Text style={[styles.text,textStyle]}>{props.name}:{props.hexCode}</Text>
        </View>


    )
};

const styles=StyleSheet.create({
    container:{
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
        width:320,
        marginBottom: 10,
        borderRadius:20,

        


    },
    text:{
        fontSize:15,
        fontWeight:'bold'
    }
})


export default Colors;