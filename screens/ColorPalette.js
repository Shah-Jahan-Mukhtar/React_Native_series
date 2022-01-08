import React  from "react";
import { FlatList ,Text,StyleSheet} from "react-native";
import Colors from "../components/colorBox";




const ColorPalette=({route})=>{
  const {colors,paletteName}=route.params;
    return(
    
      <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={(item)=>item.hexCode}
      renderItem={({item})=><Colors name={item.colorName} hexCode={item.hexCode}/> }

      ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
      />
    
    )
};


const styles=StyleSheet.create({
  
  container:{
    paddingTop:5,
    paddingBottom:10,
    paddingHorizontal:20,
    backgroundColor:'white'


  },
  heading:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:10
  }
})

export default ColorPalette;