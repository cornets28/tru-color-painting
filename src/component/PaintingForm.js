/* eslint-disable no-undef */
import React, { Component } from "react";
import Axios from "axios";
import fire from "../Fire";


export default class PaintingForm extends Component {
  state = {
    imgBefore: "",
    imgAfter: "",
    description: "",
    url: "",
    progress: 0
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  fileSelectedBeforeHandler = (e) => {
    if (e.target.files[0]) {
       this.setState({
         imgBefore: e.target.files[0],
       });
    }
  };

  fileSelectedAfterHandler = (e) => {
    this.setState({
      imgBefore: e.target.files[0],
    });
  };

  fileUploadOneHandler = () => {
    // const formData = new FormData();
    // formdata.append("image", this.state.imgBefore, this.state.imgBefore.name);
    // this.props.uploadImage(formData);
    // Axios.post("tru-color-painting.appspot.com/", formdata).then((res) => {
    //   console.log(res);
    // });

    // let bucketName = 'images'
    // let storageRef = firebase.storage().ref(`${bucketName}/${imgBefore.name}`);
    // let uploadTask = storageRef.put(imgBefore);
    // uplaodTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    //   () => {
    //     let downloadURL = uploadTask.snapshot.downloadURL
    //   })
    const { imgBefore } = this.state;
    const uploadTask = storage.ref(`images/${imgBefore.name}`).put(imgBefore);
     uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("images")
          .child(imgBefore.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
            console.log(url)
          });
      }
    );
  };

  // fileUploadOTwoHandler = () => {
  //   const formdata = new FormData();
  //   formdata.append("image", this.state.imgAfter, this.state.imgAfter.name);
  //   Axios.post("TODO: copy the link from firebase", formdata).then((res) => {
  //     console.log(res);
  //   });
  // };

  onSubmit = (e) => {
    e.preventDefault();
    const data = this.state;

    fire.database().ref("paintingHouses").push(data);
    this.setState({
      imgBefore: "",
      imgAfter: "",
      description: ""
    });
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
                        <label>Image Before </label>
                        <input
                          style={{ display: "none" }}
                          ref={(fileInput) => (this.fileInput = fileInput)}
                          type="file"
                          className="form-control"
                          placeholder="Before"
                          id="imageInput"
                          name="imgBefore"
                          value={imgBefore}
                          onChange={(e) => this.fileSelectedBeforeHandler(e)}
                          // id="wd-height"
                          required
                        />
                        <button
                          type="button"
                          className="btn-block ebtn"
                          onClick={() => this.fileInput.click()}
                        >
                          Pick 1st Image
                        </button>
                        <button
                          type="button"
                          className="btn-block upload"
                          onClick={this.fileUploadOneHandler}
                        >
                          {" "}
                          Upload 1st Image
                        </button>
                      </div>
                      <div className="col form-group">
                        <label>Image After</label>
                        <input
                          type="file"
                          ref={(fileInputTwo) =>
                            (this.fileInputTwo = fileInputTwo)
                          }
                          style={{ display: "none" }}
                          className="form-control"
                          placeholder="After"
                          name="imgAfter"
                          value={imgAfter}
                          onChange={(e) => this.fileSelectedAfterHandler(e)}
                          required
                        />
                        {/* <button
                          type="button"
                          className="btn-block ebtn"
                          onClick={() => this.fileInputTwo.click()}
                        >
                          Pick 2nd Image
                        </button>
                        <button
                          type="button"
                          className="btn-block upload"
                          onClick={this.fileUploadTwoHandler}
                        >
                          {" "}
                          Upload 2nd Image
                        </button> */}
                      </div>
                    </div>

                    <div className="form-row pt-2">
                      <div className="form-group col">
                        <label>Description</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Short Description"
                          name="description"
                          value={description}
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
