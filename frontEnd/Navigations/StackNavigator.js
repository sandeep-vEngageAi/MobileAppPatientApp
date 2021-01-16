import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Activity from "../screens/Activity";
import Schedule from "../screens/Schedule";

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };
  const MainStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  }
  const ActivityStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Activity" component={Activity} />
      </Stack.Navigator>
    );
  }
  
  const ScheduleStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Schedule" component={Schedule} />
      </Stack.Navigator>
    );
  }
  
  export { MainStackNavigator, ScheduleStackNavigator,ActivityStackNavigator };