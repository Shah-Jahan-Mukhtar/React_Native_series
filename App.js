import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList,SafeAreaView,SectionList} from 'react-native';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


const  App=()=> {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="ColorPalette" component={ColorPalette}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}






export default App;















// const COLORS = [
//   { colorName: 'Base03', hexCode: '#002b36' },
//   { colorName: 'Base02', hexCode: '#073642' },
//   { colorName: 'Base01', hexCode: '#586e75' },
//   { colorName: 'Base00', hexCode: '#657b83' },
//   { colorName: 'Base0', hexCode: '#839496' },
//   { colorName: 'Base1', hexCode: '#93a1a1' },
//   { colorName: 'Base2', hexCode: '#eee8d5' },
//   { colorName: 'Base3', hexCode: '#fdf6e3' },
//   { colorName: 'Yellow', hexCode: '#b58900' },
//   { colorName: 'Orange', hexCode: '#cb4b16' },
//   { colorName: 'Red', hexCode: '#dc322f' },
//   { colorName: 'Magenta', hexCode: '#d33682' },
//   { colorName: 'Violet', hexCode: '#6c71c4' },
//   { colorName: 'Blue', hexCode: '#268bd2' },
//   { colorName: 'Cyan', hexCode: '#2aa198' },
//   { colorName: 'Green', hexCode: '#859900' },
// ];

// const  App=()=> {
//   return (
//     <SafeAreaView style={{alignContent:'center',alignItems:'center',marginTop:25}}>
//       <FlatList
//       style={styles.container}
//       data={COLORS}
//       keyExtractor={(item)=>item.hexCode}
//       renderItem={({item})=><Colors name={item.colorName} hexCode={item.hexCode}/> }

//       ListHeaderComponent={<Text style={styles.heading}>Solarized</Text>}
//       />
//     </SafeAreaView>
//   );
// }



// Section List

// const FOOD=[
//   {title:'Healthy food',data:['Apples', 'Broccoli']},
//   {title:'Non Healthy food' , data:['Cookies', 'Doritos', 'Eclairs']}
// ]

{/* <SafeAreaView style={{alignContent:'center',alignItems:'center',marginTop:25}}>
      <SectionList
      style={styles.container}
      sections={FOOD}
      keyExtractor={(item)=>item}
      renderItem={(data)=><Food name={data.item} /> }
      renderSectionHeader={({section})=>(<Text style={styles.heading}>{section.title}</Text>)}
      // ListHeaderComponent={<Text style={styles.heading}>Solarized</Text>}
      />
    </SafeAreaView> */}


// const styles=StyleSheet.create({
  
//   container:{
//     paddingTop:50,
//     paddingHorizontal:10,
//     paddingBottom:20,
//     width:340

//   },
//   heading:{
//     fontSize:30,
//     fontWeight:'bold',
//     marginBottom:10
//   }
// })