import React, { Component } from "react";
import { PaintingConsumer } from "../../context";
import House from "./House";
import { paintingHouses } from "../../data";

export default class HouseList extends Component {
  state = {
    paintings: paintingHouses,
  };
  render() {
    return (
      <React.Fragment>
        <section className="completed-project">
          <div className="container">
            <div className="recent-top">
              <h3>Our Recent Completed Paintings</h3>
              <p>
                Let’s create the home of your dreams. No Job Is Too Big Or
                Small. We provide the highest quality painting and most
                professional services.
              </p>
            </div>

            <PaintingConsumer>
              {(value) => {
                return value.paintings.map((painting) => {
                  return <House key={painting.sys.id} painting={painting} />;
                });
              }}
            </PaintingConsumer>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
