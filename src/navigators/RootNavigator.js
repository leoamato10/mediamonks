import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, setData } from "../store/actions";

import Home from "../screens/Home";

const LoginStack = createNativeStackNavigator();

const RootNavigator = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const dataFromStorage = await AsyncStorage.getItem("data_key");
        const parsedDataFromStorage = JSON.parse(dataFromStorage);
        parsedDataFromStorage
          ? dispatch(setData(parsedDataFromStorage))
          : dispatch(fetchData());
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);

  const stackNavigatorOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: "transparent" },
  };

  return (
    <NavigationContainer>
      <LoginStack.Navigator screenOptions={stackNavigatorOptions}>
        <LoginStack.Screen name="Home" component={Home} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
