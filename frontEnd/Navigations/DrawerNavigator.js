
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import {View } from 'react-native';

import TabNavigator,{BottomTabTestSchedulerHome} from "./TabNavigator";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Schedule" component={TabNavigator} />
      <Drawer.Screen name="Activity" component={TabNavigator} />
      <Drawer.Screen name="Test Schedule" component={BottomTabTestSchedulerHome} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
