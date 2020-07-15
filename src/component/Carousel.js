import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    const { id, imgCarousel } = this.props.carousPhoto;
    return (
      <div class="item carousel-item">
        <div class="row">
          <div class="col-md-12">
            <img src={imgCarousel} alt="CarouselPhoto" />
          </div>
        </div>
      </div>
    );
  }
}
