import React, { useState, useEffect } from "react";

import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function ChatUser(props) {
  return (
    <View style={styles.chatContainer}>
      <View style={{ maxWidth: 300 }}>
        <View style={styles.chatStyleRight}>
          <View>
            <Text style={[styles.chatStyleRightMsg]}>{props.message}</Text>
          </View>
          <View style={styles.chatStylePresentTime}>
            <Text>{JSON.stringify(props.presentTime).replace(/['"]+/g, '')}</Text>
            {/* <Text>12:00:00pm</Text> */}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  chatStyleRight: {
    shadowColor: "#000",
    flexDirection: "column",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignItems: "flex-end",
    flexGrow: 1,
    backgroundColor: "lightblue",
    marginBottom: 10,
    padding: 8,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    color: "black",
  },
  chatStyleRightMsg: {
    // fontSize:20,
    alignSelf: "flex-end",
    textAlign: "right",
  },
  chatStylePresentTime: {
    fontWeight: "bold",
    color: "red",
    alignSelf: "flex-start",
    fontStyle: "italic",
  },
});
