import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar/Navbar";
import AboutUs from "./component//AboutUs/AboutUs";
import HouseList from "./component/Houses/HouseList";
import Testimonials from "./component/Testimonials/Testimonials";
import PageNotFound from "./component/PageNotFound";
import Footer from "./component/Footer/Footer";
import "./css/App.css";
import "./css/SmallScreen.css";


function App() {
  return (
    <React.Fragment>
      <div className="preloader">
        <div className="p-wrapper">
          <div className="spinner">
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
        <Route path="/Testimonials" component={Testimonials} />
        <Route path="/about-us" component={AboutUs} />
        <Route component={PageNotFound} />
      </Switch>

      <Footer />
    </React.Fragment>
  );
}

export default App;
