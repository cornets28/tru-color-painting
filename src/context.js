import React, { Component } from "react";
import { carouselPhotos, team } from "./data";
import {client} from './client';

const PaintingContext = React.createContext();

class PaintingProvider extends Component {
  state = {
    paintings: [],
    carouselPics: carouselPhotos,
    teamMembers: team,
  };

  componentDidMount() {
    client.getEntries()
      .then((response) => {
        console.log(response)
        this.setState({
          paintings: response.items
        })
      })
      .catch(console.error())
  }

  render() {
    return (
      <PaintingContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </PaintingContext.Provider>
    );
  }
}
const PaintingConsumer = PaintingContext.Consumer;

export { PaintingProvider, PaintingConsumer };
