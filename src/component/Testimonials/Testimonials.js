import React, { Component } from "react";
import { PaintingConsumer } from "../../context";
import Testimony from "./Testimony";

export default class Testimonies extends Component {
  render() {
    return (
      <>
        <section className="blog-details">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 offset-lg-2">
                <h2 className="testimoies-text">Testimonials</h2>
                <hr />
                 <div class="single-comment">
              <div class="sc-image">
                <img src="./images/cclient.png" alt="" />
              </div>
              <div class="sc-head">
                <h2>Robison Croso</h2>
                <p>11th December, 2018</p>
              </div>
              <div class="sc-details">
                <p>
                  “Design must be functional, and functionality translated
                  visual aesthetics without any reliance on gimmicks that have
                  to be explained. Design must be functional, and function ality
                  must be translated into.”|
                </p>
                <div class="sc-reply">
                  <a href="#"> <i class="fas fa-reply-all"></i> &nbsp; Reply</a>
                </div>
              </div>
            </div>

                <PaintingConsumer>
                  {(value) => {
                    return value.testimonyData.map((testimony) => {
                      return (
                        <Testimony
                          key={testimony.date + testimony.fullName}
                          testimony={testimony}
                        />
                      );
                    });
                  }}
                </PaintingConsumer>

                <div className="client-coment">
                  <div>
                    <h2>Leave a testimony</h2>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
