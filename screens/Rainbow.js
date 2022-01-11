import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Colors from "../components/colorBox";

const RAINBOW = [
  { colorName: "Red", hexCode: "#FF0000" },
  { colorName: "Orange", hexCode: "#FF7F00" },
  { colorName: "Yellow", hexCode: "#FFFF00" },
  { colorName: "Green", hexCode: "#00FF00" },
  { colorName: "Violet", hexCode: "#8B00FF" },
];

const Rainbow = () => {
  return (
    <FlatList
      data={RAINBOW}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Colors name={item.colorName} hexCode={hexCode} />
      )}
    />
  );
};
