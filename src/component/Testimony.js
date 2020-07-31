import React, { Component } from "react";

export default class Testimony extends Component {
  render() {
    // eslint-disable-next-line no-unused-vars
    const { id, fullName, date, testimony } = this.props.testimony;
    return (
      <div className="single-comment">
        <div className="sc-image">
          <img src="/images/cclient.png" alt="" />
        </div>
        <div className="sc-head">
          <h2>{fullName}</h2>
          <p>{date}</p>
        </div>
        <div className="sc-details">
          <p>{testimony}</p>
        </div>
      </div>
    );
  }
}
