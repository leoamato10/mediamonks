import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_ERROR } from "./actionTypes";

const initialState = {
  data: null,
  isLoading: null,
  error: "",
};

export default dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, isLoading: true, error: "", data: action.payload };
    case GET_DATA_SUCCESS:
      return { ...state, isLoading: false, error: "" };
    case GET_DATA_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
