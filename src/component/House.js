import React, { Component } from "react";

export default class House extends Component {
  render() {
    // eslint-disable-next-line no-unused-vars
    const { id, imgBefore, imgAfter, description } = this.props.painting.fields;
    return (
      <div className="recent-project">
        <div className="row">
          <div className="col-md-6 bottom-img">
            <div className="project-1">
              <img src={imgBefore.fields.file.url} alt="After Painting" />
              <h4 className="after">Before</h4>
              <div className="prj-1-content prj-two">
                <div className="p-icon">
                  <span className="flaticon-repair ficon-pj-1 ficon-pj-2"></span>
                </div>
                <h4>Tru Color Painting For Your Dream!</h4>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 bottom-img">
            <div className="project-1">
              <img src={imgAfter.fields.file.url} alt="After Painting" />
              <h4 className="after">After</h4>
              <div className="prj-1-content prj-two">
                <div className="p-icon">
                  <span className="flaticon-repair ficon-pj-1 ficon-pj-2"></span>
                </div>
                <h4>Tru Color Painting For Your Dream!</h4>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
