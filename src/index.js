import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { PaintingProvider } from "./context";

ReactDOM.render(
  <PaintingProvider>
    <Router>
      <App />
    </Router>
  </PaintingProvider>,
  document.getElementById("root")
);
