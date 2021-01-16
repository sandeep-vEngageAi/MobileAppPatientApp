import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from '../screens/Home';
import Activity from '../screens/Activity';
import Schedule from '../screens/Schedule';
import TestSchedule from '../screens/TestSchedule';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Schedule') {
            iconName = focused ? 'alarm' : 'alarm-outline';
          } else if (route.name === 'Activity') {
            iconName = focused ? 'accessibility' : 'accessibility-outline';
         
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Schedule" component={Schedule} />
      <Tab.Screen name="Activity" component={Activity} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

export const BottomTabTestSchedulerHome = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Schedule') {
            iconName = focused ? 'alarm' : 'alarm-outline';
          } else if (route.name === 'Activity') {
            iconName = focused ? 'accessibility' : 'accessibility-outline';
         
          }else if (route.name === 'Test Schedule') {
            iconName = focused ? 'calendar' : 'calendar-outline';
         
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Schedule" component={Schedule} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Test Schedule" component={TestSchedule} />
    </Tab.Navigator>
  );
};
// export {BottomTabTestSchedulerHome};

// export default BottomTabNavigator;