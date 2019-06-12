import React from "react";
import ReactDOM from "react-dom";
import Expediteur from "./components/Expediteur";
import Form from "antd";
import "antd/dist/antd.css";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Expediteur />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
