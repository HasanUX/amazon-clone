import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./Context/StateProvider";
import Reducer, { initialState } from "./Context/Reducer";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} Reducer={Reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
