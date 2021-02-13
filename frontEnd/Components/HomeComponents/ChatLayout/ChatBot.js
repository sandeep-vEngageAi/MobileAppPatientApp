import React, { useState, useEffect } from "react";

import { StyleSheet, Text, View } from "react-native";

export default function ChatBot(props) {
  let presentTime = JSON.stringify(props.presentTime);
  return (
    <View style={styles.chatContainer}>
      <View style={{ maxWidth: 300, alignItems: "flex-end" }}>
        <View style={styles.chatStyleLeft}>
          <View>
            <Text style={styles.chatStyleLeftMsg}>{props.message}</Text>
          </View>
          <View style={styles.chatStylePresentTime}>
          <Text>{JSON.stringify(props.presentTime).replace(/['"]+/g, '')}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
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
    flexGrow: 1,
    backgroundColor: "#E9E9E9",
    marginBottom: 10,
    padding: 8,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  // chatStyleLeftMsg:{
  //   align
  // },
  chatStylePresentTime: {
    fontWeight: "bold",
    color: "red",
    alignSelf: "flex-end",
    fontStyle: "italic",
  },
});
