import React  from "react";
import { FlatList,StyleSheet ,Text} from "react-native";
import Colors from "../components/colorBox";



const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const ColorPalette=()=>{
    return(
    
      <FlatList
      style={styles.container}
      data={COLORS}
      keyExtractor={(item)=>item.hexCode}
      renderItem={({item})=><Colors name={item.colorName} hexCode={item.hexCode}/> }

      ListHeaderComponent={<Text style={styles.heading}>Solarized</Text>}
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