import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const { data } = useSelector((state) => state.state);
  console.log(data);

  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }

    console.log("Done.");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>Home</Text>
      <Button title="clean data" onPress={() => clearAll()} />
    </View>
  );
};

export default Home;
