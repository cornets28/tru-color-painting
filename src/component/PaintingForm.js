import React, { Component } from 'react'

export default class PaintingForm extends Component {
  render() {
    return (
      <div
        className="modal animated fadeIn"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
        >
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
                <h2>Add Painting Photos</h2>
                <article className="card-body">
                  <form>
                    <div className="form-row pt-2">
                      <div className="col form-group">
                        <label>Image Before </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Before"
                          id="wd-height"
                          required
                        />
                      </div>
                      <div className="col form-group">
                        <label>Image After</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="After"
                          id="wd-width"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row pt-2">
                      <div className="form-group col">
                        <label>Description</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Insert Image"
                          id="wnd-height"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <button
                        type="button"
                        className="btn-block ebtn"
                        id="estimate-btn"
                      >
                        Insert Images
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
