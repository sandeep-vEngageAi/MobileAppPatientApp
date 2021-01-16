import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

export default function ChatDayDate({name}) {
  return (
      <ScrollView style={styles.scrollBody}
      // stickyHeaderIndices={[6]}
      showsVerticalScrollIndicator={false}
      >
        <View style={styles.chatDateCenter}>
          <View>
            <Text style={{ flexGrow: 1, color: "lightgrey" }}>
              __________________________
            </Text>
          </View>
          <Text style={styles.chatStyleMiddle}>
            <Text style={{ flexGrow: 0 }}>{name}</Text>
          </Text>
          <View>
            <Text style={{ flexGrow: 1, color: "lightgrey" }}>
              __________________________
            </Text>
          </View>
        </View>
      </ScrollView>

  );
}

const styles = StyleSheet.create({

  chatDateCenter: {
    display: "flex",
    flexDirection: "row",
    // position:"absolute",
    justifyContent: "center",
  },
  chatStyleMiddle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,

    alignSelf: "center",
    flexGrow: 1,
    backgroundColor: "darkgrey",
    maxWidth: 300,
    marginBottom: 10,
    padding: 8,
    minWidth: 120,
    textAlign: "center",
    borderRadius: 10,
    color: "white",
    zIndex: 1,
  },

 
});
