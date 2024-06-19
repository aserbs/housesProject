import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MyProvider, ScrollProvider } from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyProvider>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </MyProvider>
  </React.StrictMode>
);
