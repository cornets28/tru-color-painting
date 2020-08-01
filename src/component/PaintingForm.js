/* eslint-disable no-undef */
import React, { Component } from "react";
import fire from "./firebase";

export default class PaintingForm extends Component {
  constructor() {
    super();

    const today = new Date(),
      date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();

    this.state = {
      testimony: "",
      fullName: "",
      date: date,
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    let testimonyRef = fire
      .database()
      .ref("testimonies")
      .orderByKey()
      .limitToLast(100);
    fire.database().ref("testimonies").push(this.state);
    // console.log(this.state);
    this.setState({
      testimony: "",
      fullName: "",
    });
  };

  render() {
    const { testimony, fullName } = this.state;
    return (
      <div
        className="modal animated fadeIn"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content e-m-contents">
            <div className="modal-body">
              <button
                type="button"
                className="close es-close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="card estimate-card es-card-2">
                <span className="flaticon-paint esc-paint"></span>
                <h2>Add A Testimony</h2>
                <article className="card-body">
                  <form>
                    <div className="form-row pt-2">
                      <div className="col form-group">
                        <label>Your Testimony</label>
                        <textarea
                          type="text"
                          className="form-control"
                          name="testimony"
                          value={testimony}
                          onChange={(e) => this.handleInputChange(e)}
                          placeholder="Start writing here..."
                          id="wd-height"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row pt-2">
                      <div className="form-group col">
                        <label>Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          className="form-control"
                          placeholder="Full Name"
                          id="doord-height"
                          value={fullName}
                          onChange={(e) => this.handleInputChange(e)}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <button
                        type="button"
                        className="btn-block ebtn"
                        id="estimate-btn"
                        onClick={(e) => this.onSubmit(e)}
                      >
                        Submit Testimony
                      </button>
                    </div>
                  </form>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
