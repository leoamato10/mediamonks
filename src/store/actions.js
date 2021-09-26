import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_ERROR } from "./actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "https://jsonplaceholder.typicode.com/photos?_page=1&_limit=";
const TOTAL_DATA_RESULTS = "10";

export const fetchData = () => {
  console.log("data fetched from API");
  const persistData = async (data) => {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem("data_key", jsonValue);
    } catch (e) {
      console.log("can´t save object: ", e);
    }
  };

  return async (dispatch) => {
    try {
      await dispatch({ type: GET_DATA });
      const response = await fetch(BASE_URL + TOTAL_DATA_RESULTS);
      const data = await response.json();
      await persistData(data);
      await dispatch({ type: GET_DATA_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_DATA_ERROR,
        payload: "Error de fetch.",
      });
    }
  };
};

export const setData = (data) => {
  console.log("data fetched from STORAGE");
  return async (dispatch) => {
    try {
      await dispatch({ type: GET_DATA_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_DATA_ERROR,
        payload: "Error de fetch.",
      });
    }
  };
};

// export const fetchData = () => {
//   const persistData = async (value) => {
//     try {
//       const jsonValue = JSON.stringify(value);
//       await AsyncStorage.setItem("data_key", jsonValue);
//     } catch (e) {
//       console.log("storage error: ", e);
//     }
//   };

//   return async (dispatch) => {
//     try {
//       await dispatch({ type: GET_DATA });
//       const response = await fetch(BASE_URL + "/" + TOTAL_DATA_RESULTS);
//       const { data } = await response.json();
//       await persistData(data);
//       await dispatch({ type: GET_DATA_SUCCESS, payload: token });
//     } catch (error) {
//       dispatch({
//         type: GET_DATA_ERROR,
//         payload: "Error de fetch.",
//       });
//     }
//   };
// };
