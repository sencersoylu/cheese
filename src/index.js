import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./App";

axios.defaults.baseURL = "http://od-do.agr.gc.ca";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
