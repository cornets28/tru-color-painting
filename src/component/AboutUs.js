import React, { Component } from "react";
import { PaintingConsumer } from "../context";
import Carousel from "./Carousel";
import { carouselPhotos } from "../data";

export default class AboutUs extends Component {
  state = {
    carouselPics: carouselPhotos,
  };
  render() {
    return (
      <React.Fragment>
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

                        
                          <PaintingConsumer>
                            {(value) => {
                              return value.carouselPics.map((carousPhoto) => {
                                return (
                                  <Carousel
                                    key={carousPhoto.id}
                                    carousPhoto={carousPhoto}
                                  />
                                );
                              });
                            }}
                          </PaintingConsumer>
                        
                      </div>

                      <div class="testimonial-nav">
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
      </React.Fragment>
    );
  }
}

