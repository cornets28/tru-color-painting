import React, { Component } from "react";
import ImageUploader from "react-images-upload";

export default class PaintingForm extends Component {
  state = {
    imgBefore: [],
    imgAfter: [],
    description: "",
  };

  onDropImageOne = (picture) => {
    this.setState({
      imgBefore: this.state.imgBefore.concat(picture),
    });
  };

   onDropImageTwo = (picture) => {
    this.setState({
      imgAfter: this.state.imgAfter.concat(picture),
    });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const data = this.state;
    console.log(data);
  };
  render() {
    const { imgBefore, imgAfter, description } = this.state;
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
                <h2>Add Painting Photos</h2>
                <article className="card-body">
                  <form>
                    <div className="form-row pt-2">
                      <div className="col form-group">
                        <label>Image Before</label>
                        <ImageUploader
                          withIcon={true}
                          buttonText="Choose 1st Image"
                          name="imgBefore"
                          value={imgBefore}
                          onChange={this.onDropImageOne}
                          imgExtension={[
                            ".jpg",
                            "jpeg",
                            ".gif",
                            ".png",
                            ".gif",
                          ]}
                          maxFileSize={5242880}
                        />
                      </div>
                      <div className="col form-group">
                        <label>Image After</label>
                        <ImageUploader
                          withIcon={true}
                          buttonText="Choose 2nd Image"
                          name="imgAfter"
                          value={imgAfter}
                          onChange={this.onDropImageTwo}
                          imgExtension={[
                            ".jpg",
                            "jpeg",
                            ".gif",
                            ".png",
                            ".gif",
                          ]}
                          maxFileSize={5242880}
                        />
                      </div>
                    </div>

                    <div className="form-row pt-2">
                      <div className="form-group col">
                        <label>Description</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Add A Short Description"
                          name="description"
                          value={description}
                          onChange={(e) => this.handleInputChange(e)}
                          // id="wnd-height"
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
