import { StatusBar } from "expo-status-bar";
import React from "react";
import HeaderPageS from "../Components/ScheduleComponents/HeaderPageS";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import CardS from "../Components/ScheduleComponents/CardS";
import CardS2 from "../Components/ScheduleComponents/CardS2";
import CardS3 from "../Components/ScheduleComponents/CardS3";
import CardS4 from "../Components/ScheduleComponents/CardS4";
export default function Schedule(props) {
  return (
    <View style={styles.container}>
      <HeaderPageS {...props} />
      <View style={styles.mainBody}>
        <ScrollView style={{backgroundColor:"white",}}
          showsVerticalScrollIndicator ={false}
          showsHorizontalScrollIndicator={false}        
          horizontal= {false}
          decelerationRate={100}
          // snapToInterval={91} 
          snapToInterval={91} 
          snapToAlignment={"start"}
        >
          <CardS />
          <CardS2 />
          <CardS3 />
          <CardS4 />
          <CardS />
          <CardS2 />
          <CardS />
          <CardS2 />
          <CardS />
          <CardS2 />
          <CardS />
          <CardS2 />
          <CardS />
          <CardS2 />
          <CardS />
          <CardS2 />
          <CardS />
          <CardS2 />
          <CardS />
          <CardS2 />
          <CardS2 />
          <CardS2 />
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor:"white",
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
