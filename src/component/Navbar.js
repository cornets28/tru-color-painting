import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../logo.png'

export default class Navbar extends Component {
  render() {
    return (
      <header class="header-area">
        <div class="container">
          <div class="paint-nav">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/">
                <img className="logo" src={Logo} alt="logo" />
              </Link>

              {/* <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button> */}
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav hp-1-nav mt-2">
                  <li class="nav-item">
                    <Link class="nav-link" to="/">
                      <h6>Home</h6>
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link class="nav-link" to="/about-us">
                      <h6>About Us</h6>
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link class="nav-link" to="/details">
                      <h6>House Details</h6>
                    </Link>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link mest" data-toggle="modal" data-target="">
                      <h6>Estimate</h6>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link last-child" href="tel:+4487788589(99)">
                      <h6> Call : +55 5978 1509 (89)</h6>
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
