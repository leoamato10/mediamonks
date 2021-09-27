import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ffff" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
