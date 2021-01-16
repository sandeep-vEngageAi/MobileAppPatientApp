import React from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";

export default function BottomPages(props) {
  return (
      <View style={styles.footerRow}>
        <View style={styles.footerRowItem}
       onPress={() => props.navigation.navigate('Home')}
       >
          <Entypo name="home" size={24} color="black" />
          <Text>Home</Text>

        </View>
        <View style={styles.footerRowItem}
        onPress={() => props.navigation.navigate('Schedule')}
        >
          <MaterialIcons name="schedule" size={24} color="black" />
          <Text>Schedule</Text>
        </View>
        <View style={styles.footerRowItem}
        onPress={() => props.navigation.navigate('Activity')}>
          <Feather name="activity" size={24} color="black" />
          <Text>Activity</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
 
  footerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "white",
    alignItems: "center",
    height: 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 4.65,

    elevation: 16,
  },
  footerRowItem: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
