import { StatusBar } from "expo-status-bar";
import React from "react";
import HeaderPageTS from "../Components/TestScheduleComponents/HeaderPageTS";
import CardTS1 from '../Components/TestScheduleComponents/CardTS1';
import CardTS2 from '../Components/TestScheduleComponents/CardTS2';
import { StyleSheet, Text, View, ScrollView } from "react-native";
export default function TestSchedule(props) {
  return (
    <View style={styles.container}>
      <HeaderPageTS  {...props} />
      <View style={styles.mainBody}>
        <ScrollView style={{backgroundColor:"#B1DADD",}}
          showsVerticalScrollIndicator ={false}
          showsHorizontalScrollIndicator={false}        
          horizontal= {false}
          decelerationRate={100}
          // snapToInterval={91} 
          snapToInterval={91} 
          snapToAlignment={"start"}
        >
            <CardTS1 />
            <CardTS2 />
            <CardTS1 />
            <CardTS2 />
           
         
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
    backgroundColor: "#B1DADD",
    color: "black",
    padding: 10,
  },
});
