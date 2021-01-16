import React, { useState, useEffect } from "react";

import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function ChatBody(props) {
  return (
    <View>
      <Text style={styles.chatStyleRight}>{props.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
