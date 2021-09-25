import * as SecureStore from "expo-secure-store";

import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_ERROR } from "./actionTypes";

const BASE_URL = "https://jsonplaceholder.typicode.com/photos";
const TOTAL_DATA_RESULTS = "150";

export const fetchData = () => {
  const persistToken = async (key, token) => {
    await SecureStore.setItemAsync(key, token);
  };

  return async (dispatch) => {
    try {
      await dispatch({ type: GET_DATA });
      const response = await fetch(BASE_URL + "/" + TOTAL_DATA_RESULTS);
      const { data } = await response.json();
      await persistToken("data", data);
      await dispatch({ type: LOGIN_USER_SUCCESS, payload: token });
    } catch (error) {
      dispatch({
        type: GET_DATA_ERROR,
        payload: "Error de fetch.",
      });
    }
  };
};
