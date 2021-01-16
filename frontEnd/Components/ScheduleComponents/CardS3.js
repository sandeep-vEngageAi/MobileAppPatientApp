import { StatusBar } from "expo-status-bar";
import React from "react";
import { Entypo } from "@expo/vector-icons";

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
          <Text>Nutrition</Text>
        </View>
      </View>
      <View style={styles.secondLine}>
        <View style={styles.secondLineFirstTwoItems}>
          <Entypo name="home" size={24} color="black" />
          <Text style={{paddingLeft:12}}>Chapati</Text>
        </View>
        <View style={styles.secondLineLastTwoItems}>
            <Text>2</Text>
            <Text style={{paddingLeft:12}}>medium</Text>
        </View>
      </View>
      <View style={styles.secondLine}>
        <View style={styles.secondLineFirstTwoItems}>
          <Entypo name="home" size={24} color="black" />
          <Text style={{paddingLeft:12}}>Chapati</Text>
        </View>
        <View style={styles.secondLineLastTwoItems}>
            <Text>2</Text>
            <Text style={{paddingLeft:12}}>medium</Text>
        </View>
      </View>
      <View style={styles.secondLine}>
        <View style={styles.secondLineFirstTwoItems}>
          <Entypo name="home" size={24} color="black" />
          <Text style={{paddingLeft:12}}>Chapati</Text>
        </View>
        <View style={styles.secondLineLastTwoItems}>
            <Text>2</Text>
            <Text style={{paddingLeft:12}}>medium</Text>
        </View>
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
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"
    },
    secondLineFirstTwoItems:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginLeft:20
    },
    secondLineLastTwoItems:{
        display:"flex",
        flexDirection:"row",
        marginRight:20
  }
});
