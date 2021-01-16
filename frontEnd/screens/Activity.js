import { StatusBar } from "expo-status-bar";
import React from "react";
import HeaderPageA from "../Components/ActivityComponents/HeaderPageA";
import { StyleSheet, Text, View } from "react-native";
import CardA1 from '../Components/ActivityComponents/CardA1';
// import WalletFlatList from '../ActivityComponents/CardAnimations/WalletFlatList'
export default function Activity(props) {
  return (
    <View style={styles.container}>
      <HeaderPageA {...props} />
      <View style={styles.mainBody}>
        <CardA1 backgroundColor="#D2E9F2" zIndex ="1" marginTop="5" text="Your Appointments"/>
        <CardA1 backgroundColor="#798fb3" zIndex="2" marginTop="-15" text="Plan your Diet" />
        <CardA1 backgroundColor="#496ba3" zIndex="3" marginTop="-15" text="Plan your Exercise" />
        <CardA1 backgroundColor="#446191" zIndex="4" marginTop="-15" text="Expected Symptoms" />
        <CardA1 backgroundColor="#4162cc"  zIndex="5"marginTop="-15"  text="Self Help" />
        <CardA1 backgroundColor="#8a58d6"  zIndex="5" marginTop="-15" text="How are you doing" />
        <CardA1 backgroundColor="#632f87"  zIndex="5" marginTop="-15" text="Know your Medication" />
        {/* <WalletFlatList /> */}
      </View>
      {/* <BottomPages {...props} /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    fontSize: 500,
  },
  mainBody: {
    flex: 1,
    backgroundColor: "white",
    color: "black",
  },

});
