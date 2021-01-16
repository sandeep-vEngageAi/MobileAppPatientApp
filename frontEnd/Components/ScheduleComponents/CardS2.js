import { StatusBar } from "expo-status-bar";
import React from "react";
import { Entypo } from "@expo/vector-icons";

import { StyleSheet, Text, View } from "react-native";
export default function CardS2(props) {
  return (
    <View style={styles.card}>
      <View style={styles.firstTwoItems}>
        <Text>6:00 am</Text>
        <Text style={{ color: "grey" }}>As soon as you wake up</Text>
      </View>
      <View style={styles.lastItems}>
        <View style={styles.centerAlignStyle}>
          <Entypo name="home" size={24} color="black" />
          <Text>Nutrition</Text>
        </View>
        <View style={styles.centerAlignStyle}>
          <Entypo name="home" size={24} color="black" />
          <Text>Medicine</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    shadowColor: "grey",
    shadowOffset: {
      width: 30,
      height: 17,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    borderRadius: 8,
    elevation: 5,
    margin: 3,
  },
  firstTwoItems: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  lastItems:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  centerAlignStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft:8
  },
});
