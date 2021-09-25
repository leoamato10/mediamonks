import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector, useDispatch } from "react-redux";

import Home from "../screens/Home";

const LoginStack = createNativeStackNavigator();

const RootNavigator = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const getToken = async () => {
  //     try {
  //       const token = await SecureStore.getItemAsync("token");
  //       token ? dispatch(loginUserWithToken(token)) : null;
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   getToken();
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
