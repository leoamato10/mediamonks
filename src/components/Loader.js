import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

const Loader = () => {
  return (
    <View
      style={{
        backgroundColor: "gray",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color="#ffff" />
    </View>
  );
};

export default Loader;
