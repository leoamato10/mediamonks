import React from "react";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import RootNavigator from "./src/navigators/RootNavigator";
import dataReducer from "./src/store/reducer";

const rootReducer = combineReducers({
  state: dataReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};
export default App;
