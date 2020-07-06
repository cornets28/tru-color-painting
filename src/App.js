import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import AboutUs from './component/AboutUs';
import HouseList from "./component/HouseList";
import HouseDetails from "./component/HouseDetails";
import PageNotFound from "./component/PageNotFound";


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <AboutUs />
      <HouseList />
      <HouseDetails />
      <PageNotFound />
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
    </React.Fragment>
  );
}

export default App;
