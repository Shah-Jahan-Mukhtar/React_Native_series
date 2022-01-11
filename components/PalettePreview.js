import React from 'react'
import  {View,Text,TouchableOpacity} from 'react-native';


const PalettePreview=(handlePress,colorPalette)=>{
    return(
        <TouchableOpacity onPress={handlePress}> 
        <Text >{colorPalette.paletteName}</Text>
        </TouchableOpacity>
    )
}



export default PalettePreview;