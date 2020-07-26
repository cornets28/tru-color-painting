import React, { Component } from "react";

export default class HouseDetails extends Component {
  render() {
    return (
      <section className="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 offset-lg-2">
              <h2 className="testimoies-text">Testimonies</h2>
              <hr />
              <div className="single-comment">
                <div className="sc-image">
                  <img src="/images/cclient.png" alt="" />
                </div>
                <div className="sc-head">
                  <h2>Robison Croso</h2>
                  <p>11th December, 2018</p>
                </div>
                <div className="sc-details">
                  <p>
                    “Design must be functional, and functionality translated
                    visual aesthetics without any reliance on gimmicks that have
                    to be explained. Design must be functional, and function
                    ality must be translated into.”|
                  </p>
                </div>
              </div>

              <div className="single-comment">
                <div className="sc-image">
                  <img src="/images/cclient.png" alt="" />
                </div>
                <div className="sc-head">
                  <h2>Robison Croso</h2>
                  <p>11th December, 2018</p>
                </div>
                <div className="sc-details">
                  <p>
                    “Design must be functional, and functionality translated
                    visual aesthetics without any reliance on gimmicks that have
                    to be explained. Design must be functional, and function
                    ality must be translated into.”|
                  </p>
                </div>
              </div>
              <div className="single-comment">
                <div className="sc-image">
                  <img src="/images/cclient.png" alt="" />
                </div>
                <div className="sc-head">
                  <h2>Robison Croso</h2>
                  <p>11th December, 2018</p>
                </div>
                <div className="sc-details">
                  <p>
                    “Design must be functional, and functionality translated
                    visual aesthetics without any reliance on gimmicks that have
                    to be explained. Design must be functional, and function
                    ality must be translated into.”|
                  </p>
                </div>
              </div>
              <div className="client-coment">
                <h2>Leave a testimony</h2>
                <hr />
                <div className="comment-box">
                  <div className="row">
                    <div className="col-md-5">
                      <input
                        type="text"
                        className="form-control cb-input"
                        placeholder="Name"
                      />
                      <input
                        type="text"
                        className="form-control cb-input"
                        placeholder="Email"
                      />
                      <input
                        type="text"
                        className="form-control cb-input"
                        placeholder="Website URL"
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="cc-submit">
                        <textarea
                          rows="6"
                          className="form-control cb-input"
                          placeholder="Comment"
                        ></textarea>
                        <button type="submit" className="ccs-btn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
