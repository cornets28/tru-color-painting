import React, { Component } from "react";
import { carouselPhotos, team } from "./data";
import {client} from './client';
// import base from './component/firebase';
// import { storage } from "./component/firebase";

const PaintingContext = React.createContext();

class PaintingProvider extends Component {
  state = {
    paintings: [],
    carouselPics: carouselPhotos,
    teamMembers: team,
    images: []
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        // console.log(response);
        this.setState({
          paintings: response.items,
        });
      })
      .catch(console.error());

      // const { params } = this.props.match;
      // this.ref = base
      //   .syncState(`${params.storeId}/carouselPics`, {
      //     context: this,
      //     state: "carouselPics",
      //   })
      //   .catch(console.error());
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
