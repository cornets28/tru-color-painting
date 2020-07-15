import React, { Component } from "react";

export default class AboutUs extends Component {
  render() {
    return (
      <section class="client-feedback">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div class="client-image wow fadeInLeft" data-wow-delay=".5s">
                <img src="/images/client.png" alt="" />
              </div>
            </div>
            <div class="col-md-7">
              <div class="client-content">
                <p>We Love What We Do</p>
                <h3 data-aos="zoom-in">We Can Paint You Dream House</h3>
                <p>
                  Fall In Love With Your House By Choosing Us. Highest quality
                  painting and most professional services.
                </p>
                <div class="testimo-slide">
                  <div
                    class="carousel slide"
                    data-ride="carousel"
                    id="quote-carousel"
                  >
                    <div class="carousel-inner">
                      <div class="item active carousel-item">
                        <div class="row">
                          <div class="col-md-12">
                            <img
                              src="/images/house-1.jpg"
                              alt="CarouselImage"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="item carousel-item">
                        <div class="row">
                          <div class="col-md-12">
                            <img src="/images/house-2.jpg" alt="" />
                          </div>
                        </div>
                      </div>

                      <div class="item carousel-item">
                        <div class="row">
                          <div class="col-md-12">
                            <img src="/images/house-3.jpg" alt="" />
                          </div>
                        </div>
                      </div>

                      <div class="item carousel-item">
                        <div class="row">
                          <div class="col-md-12">
                            <img src="/images/house-4.jpg" alt="" />
                          </div>
                        </div>
                      </div>

                      <div class="item carousel-item">
                        <div class="row">
                          <div class="col-md-12">
                            <img src="/images/house-5.jpg" alt="" />
                          </div>
                        </div>
                      </div>

                      <div class="item carousel-item">
                        <div class="row">
                          <div class="col-md-12">
                            <img src="/images/house-10.jpg" alt="" />
                          </div>
                        </div>
                      </div>

                      <div class="item carousel-item">
                        <div class="row">
                          <div class="col-md-12">
                            <img src="/images/house-9.jpg" alt="" />
                          </div>
                        </div>
                      </div>

                      <div class="item carousel-item">
                        <div class="row">
                          <div class="col-md-12">
                            <img src="/images/house-8.jpg" alt="" />
                          </div>
                        </div>
                      </div>

                      <div class="item carousel-item">
                        <div class="row">
                          <div class="col-md-12">
                            <img src="/images/house-7.jpg" alt="" />
                          </div>
                        </div>
                      </div>

                      <div class="item carousel-item">
                        <div class="row">
                          <div class="col-md-12">
                            <img src="/images/house-6.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>

                   
                    <div class="testimonial-nav prev-next">
                      <a
                        data-slide="prev"
                        href="#quote-carousel"
                        class="left carousel-control btn-prev"
                      >
                        <i class="fa fa-chevron-left"></i>
                      </a>
                      <a
                        data-slide="next"
                        href="#quote-carousel"
                        class="right carousel-control btn-next"
                      >
                        <i class="fa fa-chevron-right"></i>
                      </a>
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
