import { StatusBar } from "expo-status-bar";
import React, { useRef, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";

import {
  Animated,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
export default function Schedule(props) {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000,
    }).start();
  };
  
  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
  };

  return (
    <View>
      {/* <TouchableOpacity> */}
        <Animated.View
          style={[
            {
              opacity: fadeAnim, // Bind opacity to animated value
            },
          ]}
        >
          <View
            style={[
              styles.card,
              { backgroundColor: props.backgroundColor },
              { zIndex: +props.zIndex },

              { marginTop: +props.marginTop },
            ]}
            onPress={fadeIn}
          >
            <View style={styles.firstItem}>
              <Entypo name="home" size={24} color="black" />
            </View>
            <View style={styles.secondItem}>
              <Text style={styles.fontStyling}>{props.text}</Text>
            </View>
            <StatusBar style="auto" />
          </View>
        </Animated.View>
        {/* <Button title="Fade In" onPress={fadeIn} />
        <Button title="Fade Out" onPress={fadeOut} /> */}
      {/* </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    shadowColor: "white",
    shadowOffset: {
      width: 30,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    elevation: 5,
    flexBasis: 106,
    marginLeft: -3,
    marginRight: -3,
  },
  firstItem: { flex: 0.4, flexGrow: 1, paddingLeft: 10 },
  secondItem: {
    alignSelf: "center",
    flexGrow: 1,
  },
  fontStyling: {
    fontSize: 25,
    //   fontFamily:"Sans-serif",
  },
});
