import React from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import store  from './store/store';


import DrawerNavigator from "./Navigations/DrawerNavigator";
// import TestSchedule from "./TestSchedule/TestSchedule";

export default function App() {
  return (
    <Provider store = {store}>

    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
     </Provider>
  );
}
// export default function App() {
//   return (
//    <TestSchedule />
//   );
// }
