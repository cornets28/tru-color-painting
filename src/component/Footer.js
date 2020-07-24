import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PaintingForm from './PaintingForm';

export default class Footer extends Component {
  render() {
    return (
      <>
      {/* <section>
        <PaintingForm />
      </section> */}
        <section className="project-ask">
          <div className="container">
            <div className="pro-ask-content">
              <h1 data-aos="slide-in-left">Do You Have Any Project?</h1>
              <p>
                Feel free to contact us at any time either by e-mail or by phone. We provide highest quality work at the best price. Our name says it all!
              </p>
              <div className="btn-contact" data-wow-delay=".5s">
                <span className="con-btn">
                  <a href="Contact-us.html">Let's Talk</a>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="footer-nav">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="subscribe-top">
                  <div className="sp-logo">
                    <img src="/images/roller.png" alt="roller" />
                  </div>
                  <div className="sp-subscription-form">
                    <div className="sp-input">
                      <h4>Subscribe Us Now:</h4>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control sp-in"
                          placeholder="Enter Your Email Address"
                          // onFocus="this.placeholder=''"
                          // onBlur="this.placeholder='Enter Your Email Address'"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text" id="basic-addon2">
                            Subscribe
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-content">
              <div className="row">
                <div className="col-md-4">
                  <div className="about-company">
                    <h4>About Tru Color Painting</h4>
                    <p>
                      Tru Color Painting is located in Canada. We do wall
                      painting, normal painting, house painting, commercial
                      painting, and putch painting. We have being doing this for
                      more than 3 years.
                    </p>
                    <p>
                      Our professionalism and empathy for our customers is what
                      keep us motivate and going.
                    </p>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="about-company">
                    <h4>Our Services</h4>
                    <ul className="single-footer-widget">
                      <li>
                        <Link to="/">Wall Painting</Link>
                      </li>
                      <li>
                        <Link to="/">Normal Painting</Link>
                      </li>
                      <li>
                        <Link to="/">House Painting</Link>
                      </li>
                      <li>
                        <Link to="/">Commercial Painting</Link>
                      </li>
                      <li>
                        <Link to="/">Painting Butck</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="about-company">
                    <h4>Company</h4>
                    <ul className="single-footer-widget">
                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link to="/">Projects</Link>
                      </li>
                      <li>
                        <Link to="/">Estimation</Link>
                      </li>
                      <li>
                        <Link to="/details">More Details</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="about-company">
                    <h4>Follow Us:</h4>
                    <div className="social-icon">
                      <ul className="sicon-frist">
                        <li>
                          <Link to="/">
                            <i className="fab fa-twitter sicon"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fab fa-google-plus-g sicon"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fab fa-facebook-f sicon"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fab fa-pinterest-p sicon"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fab fa-linkedin-in sicon"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <p className="bottom-footer">
            <Link className="bottom-footer-text" to="/">
              Tru Color Painting
            </Link>
          </p>
        </footer>
      </>
    );
  }
}
