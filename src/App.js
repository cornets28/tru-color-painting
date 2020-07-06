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


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-6">Num 1</div>
          <div className="col-6"><span><div className="i fas fa-home"></div></span></div>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={HouseList} />
        <Route path="/details" component={HouseDetails} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route component={PageNotFound} />
      </Switch>

      <Footer />
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
