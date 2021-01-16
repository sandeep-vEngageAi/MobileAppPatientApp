import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";
export default function HeaderPageTS(props) {
  return (
    <View style={styles.headerTS}>
        <View style={styles.header_firstTwoItems}>
      <FontAwesome5
        name="hamburger"
        size={24}
        style={{ paddingLeft: 10, alignSelf: "center" }}
        color="white"
        onPress={() => props.navigation.openDrawer()}
      />

      <View 
      >
        <Text
          style={{
            fontSize: 20,
            paddingLeft:10,
            fontWeight: "bold",
            fontStyle: "italic",
            alignSelf: "flex-start",
            color: "white",
          }}
        >
          Your Tests Schedule
        </Text>
      </View>
      </View>
      <View style={{ paddingRight: 40 }}>
        <View style={styles.centerAlignStyle}>
          <Entypo name="home" size={24} color="black" />
          <Text>Nutrition</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTS: {
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor:"#82BECF",
    alignItems: "center",
    marginTop: Constants.statusBarHeight,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    flex:0.1,
    shadowOpacity: 0.6,
    shadowRadius: 6,
    zIndex:20,
  },
  header_firstTwoItems:{
    display:"flex",
    flexDirection:"row",
    textAlign:"center",
    justifyContent:"space-between",
    

  },
  centerAlignStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
});
