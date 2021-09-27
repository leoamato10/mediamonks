import React from "react";
import { LogBox } from "react-native";
import { NativeBaseProvider } from "native-base";
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
  LogBox.ignoreLogs(["Warning: forwardRef"]);

  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </NativeBaseProvider>
  );
};
export default App;
