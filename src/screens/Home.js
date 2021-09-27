import React from "react";
import { FlatList, StatusBar } from "react-native";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, View, useToast } from "native-base";

import Loader from "../components/Loader";
import AlbumCard from "../components/AlbumCard";

const Home = ({ navigation }) => {
  const state = useSelector((state) => state.state);
  const toast = useToast();

  const showToast = () => {
    toast.show({
      title: "Success",
      status: "success",
      description: "Storage data was successfully deleted.",
    });
  };

  const clearFetchedData = async () => {
    try {
      await AsyncStorage.clear();
      showToast();
    } catch (e) {
      console.log(e);
    }
  };

  return state.isLoading ? (
    <Loader />
  ) : (
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      <StatusBar />
      {state.data && (
        <FlatList
          data={state.data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <AlbumCard item={item} navigation={navigation} />
          )}
        />
      )}
      <View style={{ padding: 10 }}>
        <Button onPress={() => clearFetchedData()}>Clear storage data</Button>
      </View>
    </View>
  );
};

export default Home;
