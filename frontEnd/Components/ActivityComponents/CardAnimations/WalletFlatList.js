import React from "react";
import { Animated, FlatList } from "react-native";

import WalletCard from "./WalletCard";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const cards = [
    {
      index: 1,
      type: 0,
    },
    {
      index: 2,
      type: 1
    },
    {
      index: 3,
      type: 2,
    },
    {
      index: 4,
      type: 3,
    },
    {
      index: 5,
      type: 4,
    },
    {
      index: 6,
      type: 5,
    },
    {
      index: 7,
      type: 6,
    },
  ];

const Wallet = () => {
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true,
  });
  return (
    <AnimatedFlatList
      scrollEventThrottle={16}
      bounces={false}
      data={cards}
      renderItem={({ index, item: { type } }) => (
        <WalletCard {...{ index, y, type }} />
      )}
      keyExtractor={(item) => item.index}
      {...{ onScroll }}
    />
  );
};

export default Wallet;