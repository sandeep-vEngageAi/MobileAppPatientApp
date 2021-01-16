import React, { useState, useEffect } from "react";

import { StyleSheet, Text, View, } from "react-native";

export default function ChatBody(props) {


  return (
    <View>
      <Text style={styles.chatStyleLeft}>
          {props.message}
      </Text>
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
  
});
