import React ,{useState,useEffect} from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ChatBody() {
  
  return (
      <View
      >
        <View style={[styles.emojiAlign, styles.chatStyleRight]}>
          <View>
            <Entypo name="emoji-happy" size={40} color="white" />
            <Text>Happy</Text>
          </View>
          <View>
            <MaterialIcons name="emoji-events" size={40} color="blue" />
            <Text>Winner</Text>
          </View>
          <View>
            <MaterialIcons name="emoji-objects" size={40} color="yellow" />
            <Text>Bright</Text>
          </View>
        </View>
  
      </View>

  );
}

const styles = StyleSheet.create({

  
  chatStyleLeft: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    color: "black",
    elevation: 2,
    alignSelf: "flex-start",
    flexGrow: 1,
    backgroundColor: "#E9E9E9",
    maxWidth: 300,
    marginBottom: 10,
    padding: 8,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  chatStyleRight: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignSelf: "flex-end",
    flexGrow: 1,
    backgroundColor: "lightblue",
    maxWidth: 300,
    marginBottom: 10,
    padding: 8,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    color: "black",
  },
  
  emojiAlign: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "flex-end",
    width: 200,
    maxWidth: 300,
    height: 65,
    alignItems: "center",
  },
  
 
});
