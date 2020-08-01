import React, { Component } from "react";
import { carouselPhotos, team } from "./data";
import { client } from "./component/contentful/client";
import fire from "./component/firebase";
// import { storage } from "./component/firebase";

const PaintingContext = React.createContext();

class PaintingProvider extends Component {
  state = {
    paintings: [],
    carouselPics: carouselPhotos,
    teamMembers: team,
    images: [],
    testimonyData: [],
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        this.setState({
          paintings: response.items,
        });
      })
      .catch(console.error());

    const database = fire.database();
    const ref = database.ref("testimonies");

    const gotData = (data) => {
      const testimonies = data.val();
      let testimonyVal = Object.values(testimonies);
      this.setState({
        testimonyData: testimonyVal,
      });
    };

    function errData(err) {
      console.log(err);
    }

    ref.on("value", gotData, errData);
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
