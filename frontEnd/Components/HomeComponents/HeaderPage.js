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
const image = {
  uri:
    "https://images.unsplash.com/photo-1609779180241-4d221aee7c29?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"
};
export default function App(props) {
  return (
      <View style={styles.headerS}>
        <ImageBackground source={image} style={styles.imageBackgroundStyle}>
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
                fontSize: 35,
                fontWeight:"bold",
                fontStyle:"italic",
                alignSelf: "flex-start",
                paddingTop: 10,
                color: "white",
              }}
            >
              Hello vEngage
            </Text>
          </View>
        </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  
  headerS: {
    color: "white",
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
  },
  imageBackgroundStyle: {
    width: null,
    height: null,
    borderRadius: 20,
    resizeMode: "cover",
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
  },
  
});
