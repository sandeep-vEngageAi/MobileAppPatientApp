import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
export default function App(props) {
  return (
    <View style={styles.headerS}>
      <View style={styles.firstLine}>
        <View style={styles.firstLine_firstTwoItems}>
          <FontAwesome5
            name="hamburger"
            size={24}
            style={{ paddingLeft: 10, alignSelf: "center" }}
            color="white"
            onPress={() => props.navigation.openDrawer()}
          />

          <View style={{ flexGrow: 1, marginLeft: 40 }}>
            <Text
              style={{
                paddingTop: 10,
                color: "white",
              }}
            >
              October
            </Text>
          </View>
        </View>
        <View style={styles.firstLine_lastTwoItems}>
          <View style={styles.centerAlignStyle}>
            <Entypo name="home" size={24} color="black" />
            <Text>Consultation</Text>
          </View>
          <View style={styles.centerAlignStyle}>
            <Entypo name="home" size={24} color="black" />
            <Text>Tests</Text>
          </View>
        </View>
      </View>
      <View style={styles.secondLine}>
        <View style={styles.centerAlignStyle}>
          <Text>SUN</Text>
          <Text>4</Text>
        </View>
        <View style={styles.centerAlignStyle}>
          <Text>MON</Text>
          <Text>5</Text>
        </View>
        <View style={styles.centerAlignStyle}>
          <Text>TUE</Text>
          <Text>6</Text>
        </View>
        <View style={styles.centerAlignStyle}>
          <Text>WED</Text>
          <Text>7</Text>
        </View>
        <View style={styles.centerAlignStyle}>
          <Text>THUR</Text>
          <Text>8</Text>
        </View>
        <View style={styles.centerAlignStyle}>
          <Text>FRI</Text>
          <Text>9</Text>
        </View>
        <View style={styles.centerAlignStyle}>
          <Text>SAT</Text>
          <Text>10</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerS: {
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    flex: 0.2,
    marginTop: Constants.statusBarHeight,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    backgroundColor: "lightblue",
  },
  firstLine: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  firstLine_firstTwoItems: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    // marginLeft:0,
    flexGrow:1
  },
  firstLine_lastTwoItems: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginRight:10,
    flexGrow:1
  },
  secondLine: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  centerAlignStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
});
