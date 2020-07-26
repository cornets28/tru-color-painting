import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PaintingConsumer } from "../context";
import Carousel from "./Carousel";
// import { carouselPhotos, team } from "../data";
import TeamMember from "./TeamMember";

export default class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="our-experience">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="o-e-content">
                  <p>Why Choose Us</p>
                  <h1>We Are Experienced To Help You For Your Paints!</h1>
                  <p>
                    We save you a lot of time. You would not have to keep your
                    house disorganized and messed up with painting materials for
                    weeks. We ensure the timely completion of your painting
                    project.
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="expart">
                      <div className="expart-icon">
                        <span className="flaticon-paint ex-1">
                          <i className="fad fa-fill-drip"></i>
                        </span>
                      </div>
                      <div className="expart-content">
                        <h4>Quality Work</h4>
                        <p>
                          We have the best tools and techniques to do the paint
                          job with precision and perfection. We use quality
                          paint best suited for your home that will stay on your
                          walls for years.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="expart">
                      <div className="expart-icon">
                        <span className="flaticon-paint-1 ex-1">
                          <i className="far fa-paint-roller"></i>
                        </span>
                      </div>
                      <div className="expart-content">
                        <h4>Saves You Money</h4>
                        <p>
                          We present an affordable painting service to you with
                          special discounts. We deliver quality work while
                          staying within the specified budget.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="expart">
                      <div className="expart-icon">
                        <span className="flaticon-graphic-tool ex-1">
                          <i className="fad fa-paint-brush"></i>
                        </span>
                      </div>
                      <div className="expart-content">
                        <h4>No Clean-up Required</h4>
                        <p>
                          There is a lot of cleanups required after the painting
                          job is done as we know the proper way to dispose of
                          the paint materials.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="expart">
                      <div className="expart-icon">
                        <span className="flaticon-pantone ex-1">
                          <i className="fad fa-brush"></i>
                        </span>
                      </div>
                      <div className="expart-content">
                        <h4>Professional Experience</h4>
                        <p>
                          We are experts of painting job. We have a team of
                          workers specializing in prepping and painting. Our
                          skill level is far above an amateur painter.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="client-feedback">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div
                  className="client-image wow fadeInLeft"
                  data-wow-delay=".5s"
                >
                  <img src="/images/client.png" alt="" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="client-content">
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
                      <div>
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
          </div>
        </section>

        <section className="our-team">
          <div className="container">
            <div className="os-content">
              <p>Our Team</p>
              <h2>Meet The Team</h2>
              <p>
                Whereas digital stuff is a bit more ethereal. I like the trophy
                on my shelf, the presence in my home nice book is just as
                valuable..
              </p>
            </div>
            <div className="row">
              <PaintingConsumer>
                {(value) => {
                  return value.teamMembers.map((member) => {
                    return <TeamMember key={member.id} member={member} />;
                  });
                }}
              </PaintingConsumer>
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
                    Tru Color Painting is painting company located in Canada.
                    Notably, in Antigonish at Scotia Nova. We work for all
                    companies or individuals as long as they are located in
                    Canada.
                  </p>
                  <p>
                    We have been performing in the painting for more than three
                    years and have always meeting our customer expectations,
                    needs, and satisfactions. At Tru Color Painting, We love
                    what we.
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

