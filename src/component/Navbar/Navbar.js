/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../../logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <header className="header-area">
        <div className="container">
          <div className="paint-nav">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/">
                <img className="logo" src={Logo} alt="logo" />
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav hp-1-nav ml-auto mt-2">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link"
                      id="dropdown1"
                      data-toggle=""
                      to="/"
                    >
                      <h6>Home</h6>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/about-us">
                      <h6>About Us</h6>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/testimonials">
                      <h6>Testimonials</h6>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link mest"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      <h6>Add A Testimony</h6>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link last-child"
                      href="tel:+1902870-4398"
                    >
                      <h6> Call : +1 (902) 870-4398</h6>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
