import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
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
          <FontAwesome5
            name="hamburger"
            size={24}
            style={{ paddingLeft: 25 }}
            color="black"
            onPress={() => props.navigation.openDrawer()}
          />

      </View>
  );
}

const styles = StyleSheet.create({
  
  headerS: {
    color: "black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 0.12,
    marginTop: Constants.statusBarHeight,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    backgroundColor:"#f5f5f5",
    zIndex:100,
  },
 
});
