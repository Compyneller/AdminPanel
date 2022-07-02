import "react-app-polyfill/stable";
import "core-js";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import DataContext from "./Context/DataContext";

ReactDOM.render(
  <Provider store={store}>
    <DataContext>
      <App />
    </DataContext>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
