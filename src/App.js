import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Hello from app</h1>

      <div className="row">
        <div className="col-6">number 1</div>
        <div className="col-6">
          <span>
            <i className="fas fa-home" />
          </span>
        </div>
      </div>

      {/* <div class="preloader">
        <div class="p-wrapper">
        <div class="spinner">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
