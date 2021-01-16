import { StatusBar } from "expo-status-bar";
import React from "react";
import HeaderPage from "../Components/HomeComponents/HeaderPage";
import ChatBody from "../Components/HomeComponents/ChatBody";
import ChatInput from "../Components/HomeComponents/ChatInput";
// import BottomPages from "../HomeComponents/BottomPages";
import { StyleSheet, Text, View,Button } from "react-native";
// import CameraIcon from "../HomeComponents/FileComponents/CameraIcon";
export default function Home(props) {

  return (
    <View style={styles.container}>

      <HeaderPage {...props} />
      <View style={styles.mainBody}>

        <ChatBody />
        {/* <CameraIcon /> */}
        {/* <Websocket /> */}
      </View>
      <ChatInput />
      {/* <BottomPages {...props}/> */}
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    fontSize: 500,
  },
  mainBody: {
    flex: 1,
    backgroundColor: "white",
    color: "black",
    padding: 10,
  },
});
