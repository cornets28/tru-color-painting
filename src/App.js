import React from "react";

import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import AboutUs from './component/AboutUs';
import HouseList from "./component/HouseList";
import HouseDetails from "./component/HouseDetails";
import PageNotFound from "./component/PageNotFound";
import Footer from "./component/Footer";
import "./SmallScreen.css";


function App() {
  return (
    <React.Fragment>
      <div class="preloader">
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
      </div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HouseList} />
        <Route path="/details" component={HouseDetails} />
        <Route path="/about-us" component={AboutUs} />
        <Route component={PageNotFound} />
      </Switch>
    
      <Footer />
    </React.Fragment>
  );
}

export default App;
