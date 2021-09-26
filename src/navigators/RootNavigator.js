import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, setData } from "../store/actions";

import Home from "../screens/Home";
import ItemDetail from "../screens/ItemDetail";

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

  const stackNavigatorOptions = {
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: "#000",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };

  return (
    <NavigationContainer>
      <LoginStack.Navigator>
        <LoginStack.Screen
          name="HOME"
          component={Home}
          options={stackNavigatorOptions}
        />
        <LoginStack.Screen
          name="DETAIL"
          component={ItemDetail}
          options={stackNavigatorOptions}
        />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
