import Instructions from "../instructions";

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => (
  <div className="App">
    <Instructions />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
