import React from "react";
import { FlatList, StyleSheet, Text, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
  item: {
    paddingLeft: 30,
    fontSize: 12,
    // height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={[
          {
            key: "Antibiotic | TAB Ceftum",
            id: Math.floor(Math.random(1, 1000)),
          },
          {
            key: "Antifungal | CAP Forcan",
            id: Math.floor(Math.random(1, 1000)),
          },
          {
            key: "Gastritis | CAP Peno DSR",
            id: Math.floor(Math.random(1, 1000)),
          },
          {
            key: "Multivitamin | CAP Lycogem",
            id: Math.floor(Math.random(1, 1000)),
          },
        ]}
        renderItem={({ item }) => (
          <Text style={styles.item}>{`\u2022   ${item.key}`}</Text>
        )}
      />
    </SafeAreaView>
  );
};

export default FlatListBasics;
