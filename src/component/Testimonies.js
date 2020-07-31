import React, { Component } from "react";
import { PaintingConsumer } from "../context";
import Testimony from "./Testimony";

export default class Testimonies extends Component {
  render() {
    return (
      <>
        <section className="blog-details">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 offset-lg-2">
                <h2 className="testimoies-text">Testimonies</h2>
                <hr />

                <PaintingConsumer>
                  {(value) => {
                    return value.testimonyData.map((testimony) => {
                      return (
                        <Testimony
                          key={testimony.date + testimony.fullName}
                          testimony={testimony}
                        />
                      );
                    });
                  }}
                </PaintingConsumer>

                <div className="client-coment">
                  <div>
                    <h2>Leave a testimony</h2>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
