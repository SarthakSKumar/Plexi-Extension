import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

const pluginTagId = "root";
const existingInstance = document.getElementById("root");
if (existingInstance) {
  console.log("existing instance found, removing");
  existingInstance.remove();
}

const index = document.createElement("div");
index.id = pluginTagId;

const body = document.querySelector("body");
if (body) {
  body.append(index);
}

ReactDOM.createRoot(index).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
