import { StatusBar } from "expo-status-bar";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import FlatListFile from './FlatListFile';
import { StyleSheet, Text, View } from "react-native";
export default function CardS3(props) {
  return (
    <View style={styles.card}>
      <View style={styles.firstLine}>
        <View style={styles.firstTwoItems}>
          <Text>6:00 am</Text>
          <Text style={{ color: "grey" }}>As soon as you wake up</Text>
        </View>
        <View style={styles.centerAlignStyle}>
          <Entypo name="home" size={24} color="black" />
          <Text>Medicine</Text>
        </View>
      </View>
      <View style={styles.secondLine}>
        <FlatListFile />
      </View>
     

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "white",
    shadowColor: "white",
    shadowOffset: {
      width: 30,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    borderRadius: 8,
    elevation: 5,
    margin: 3,
  },
  firstLine: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  firstTwoItems: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  centerAlignStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  secondLine:{
      display:"flex",
      flexDirection:"column",
    },
   
});
