import { StatusBar } from "expo-status-bar";
import React from "react";
import { Entypo } from "@expo/vector-icons";

import { StyleSheet, Text, View } from "react-native";
import FlatListFile from "../ScheduleComponents/FlatListFile";
export default function Schedule(props) {
  return (
    <View style={styles.card}>
      <View style={styles.Row}>
        <View style={[styles.firstColumn, { paddingTop: 15 }]}>
          <View style={{ flexGrow: 1 }}>
            <Text style={{ fontSize: 18 }}>Blood Tests</Text>
            <FlatListFile />
          </View>
        </View>
        <View style={styles.secondColumn}>
          <View style={styles.Items}>
            <View style={styles.RightStyle_first}>
              <Entypo name="home" size={24} color="black" />
            </View>
            <View style={styles.RightStyle_second}>
              <Text>Book Appointment</Text>
            </View>
          </View>
          <View style={styles.Items}>
            <View style={styles.RightStyle_first}>
              <Entypo name="home" size={24} color="black" />
            </View>
            <View style={styles.RightStyle_second}>
              <Text>Arrange Transport</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.Row}>
        <View style={styles.firstColumn}>
          <Text>
            This test is required for your next consultation with Dr. Ron
            Weasely
          </Text>
        </View>
        <View style={styles.secondColumn}>
          <View style={styles.Items}>
            <View style={styles.RightStyle_first}>
              <Entypo name="home" size={24} color="black" />
            </View>
            <View style={styles.RightStyle_second}>
              <Text>Test completed</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.Row,{borderBottomWidth:0,}]}>
        <View style={[styles.firstColumn,{paddingBottom:20}]}>
          <Text>This test requires you to be fasting for at least 6 hours</Text>
        </View>
        <View style={styles.secondColumn}>
          <View style={styles.Items}>
            <View style={styles.RightStyle_first}>
              <Entypo name="home" size={24} color="black" />
            </View>
            <View style={styles.RightStyle_second}>
              <Text>Result Received</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    // alignItems: "center",
    shadowColor: "white",
    shadowOffset: {
      width: 30,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    borderRadius: 8,
    elevation: 5,
    margin: 3,
  },
  Row: {
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    // backgroundColor:"blue",
  },

  firstColumn: {
    flex: 0.65,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "lightgrey",
    opacity: 0.45,

    flexGrow: 0.65,
  },
  secondColumn: {
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 5,
    paddingBottom:10,
    flex: 0.35,
    display: "flex",
    flexDirection: "column",

    // justifyContent:"space-between",
    opacity: 0.6,

    flexGrow: 0.35,
  },
  Items: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 0.5,
    // borderBottomColor: "grey",
    // borderBottomWidth: 1,
  },
  RightStyle_first: {
    flex: 0.2,
    flexGrow: 0.6,
  },
  RightStyle_second: {
    flex: 0.8,
    flexGrow: 1,
  },
});
