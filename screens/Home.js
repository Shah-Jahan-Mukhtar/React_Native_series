import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';


const Home=({navigation})=>{
    return(
        <View>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('ColorPalette')
            }}> 
            <Text style={styles.text}>Solarized!</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles=StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:10

    }
})


export default Home;