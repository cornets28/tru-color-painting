import React, { Component } from "react";
import { Link } from 'react-router-dom'
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
        <section className="client-feedback">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="client-image wow fadeInLeft" data-wow-delay=".5s">
                  <img src="/images/client.png" alt="" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="client-content">
                  <p>We Love What We Do</p>
                  <h3 data-aos="zoom-in">We Can Paint You Dream House</h3>
                  <p>
                    Fall In Love With Your House By Choosing Us. Highest quality
                    painting and most professional services.
                  </p>
                  <div className="testimo-slide">
                    <div
                      className="carousel slide"
                      data-ride="carousel"
                      id="quote-carousel"
                    >
                      <div className="carousel-inner">
                        <div className="item active carousel-item">
                          <div className="row">
                            <div className="col-md-12">
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

                      <div className="testimonial-nav">
                        <a
                          data-slide="prev"
                          href="#quote-carousel"
                          className="left carousel-control btn-prev"
                        >
                          <i className="fa fa-chevron-left"></i>
                        </a>
                        <a
                          data-slide="next"
                          href="#quote-carousel"
                          className="right carousel-control btn-next"
                        >
                          <i className="fa fa-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wepaint-thecolor">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="colo-content">
                  <h2>We Offer A Huge Variety Of Colors!</h2>
                  <p>
                   Tru Color Painting is painting company located in Canada. Notably, in Antigonish at Scotia Nova. We work for all companies or individuals as long as they are located in Canada.
                  </p>
                  <p>
                   We have been performing in the painting for more than three years and have always meeting our customer expectations, needs, and satisfactions. At Tru Color Painting, We love what we.
                  </p>
                  <div className="btn-learn">
                    <span className="learn-ab">
                      <Link to="/"> See Our Works</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="color-image wow zoomIn" data-wow-delay=".3s">
                  <img src="images/color.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

