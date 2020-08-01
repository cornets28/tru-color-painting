import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    // eslint-disable-next-line no-unused-vars
    const { id, imgCarousel } = this.props.carousPhoto;
    return (
      <div className="item carousel-item">
        <div className="row">
          <div className="col-md-12">
            <img src={imgCarousel} alt="CarouselPhoto" />
          </div>
        </div>
      </div>
    );
  }
}
