import React, { Component } from 'react';
import { paintingHouses, carouselPhotos } from './data';

const PaintingContext = React.createContext()

class PaintingProvider extends Component {
  state = {
    paintings: paintingHouses,
    carouselPics: carouselPhotos,
  };
  render() {
    return (
      <PaintingContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </PaintingContext.Provider>
    );
  }
}
const PaintingConsumer = PaintingContext.Consumer;

export { PaintingProvider, PaintingConsumer};
