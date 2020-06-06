import React, { Component } from "react";
import Webcam from "react-webcam";
import { Consumer } from "../../context";
import { v1 as uuid } from "uuid";
import classnames from "classnames";

class Addvisitor extends Component {
  // name,
  // photo,
  // email,
  // typeOfVisit,
  // personToVisit,
  // dateOfEntry,
  // timeOfEntry,
  // timeOfExit
  constructor() {
    super();

    var today = new Date(),
      date =
        today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes();

    this.state = {
      id: uuid(),
      name: "",
      photo: null,
      email: "",
      typeOfVisit: "",
      personToVisit: "",
      dateOfEntry: date,
      timeOfEntry: time,
      timeOfExit: "",
      errors: []
    };
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({ photo: imageSrc });
  };

  onChangeText = e => this.setState({ [e.target.name]: e.target.value.trim() });

  submitForm = (dispatch, e) => {
    e.preventDefault();

    const {
      name,
      email,
      photo,
      typeOfVisit,
      dateOfEntry,
      personToVisit,
      timeOfEntry
    } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required " } });
      return;
    }
    // if (email === "") {
    //   this.setState({ errors: { email: "Email is required " } });
    //   return;
    // }
    if (typeOfVisit === "") {
      this.setState({
        typeOfVisit: "Meeting"
      });
    }
    if (personToVisit === "") {
      this.setState({
        errors: { personToVisit: "person to visit is required " }
      });
      return;
    }
    if (timeOfEntry === "") {
      this.setState({ errors: { phone: "time of entry required " } });
      return;
    }
    if (photo == null) {
      alert("No Image captured, give permissions if not given");
      return;
    }

    dispatch({ type: "ADD_CONTACT", payload: this.state });
    this.props.history.push("/");
  };

  render() {
    const videoConstraints = {
      width: 720,
      height: 1280,
      facingMode: "user"
    };

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <h1 className="diplay-4">
                {" "}
                <span>Add Visitor</span>
              </h1>
              <div className="card-body">
                <div>
                  {this.state.photo == null ? (
                    <React.Fragment>
                      <div className="row no-gutters">
                        <div className="col-md-12">
                          <Webcam
                            audio={false}
                            height={350}
                            ref={this.setRef}
                            screenshotFormat="image/jpeg"
                            width={350}
                            videoConstraints={videoConstraints}
                            onClick={this.capture}
                          />
                          <div className="alert alert-light" role="alert">
                            Click on image
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ) : (
                    <img src={this.state.photo} className="rounded-circle" />
                  )}
                </div>
                <form onSubmit={this.submitForm.bind(this, dispatch)}>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Name</label>
                      <input
                        name="name"
                        placeholder="Enter Name.."
                        type="text"
                        onChange={this.onChangeText}
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": this.state.errors.name
                        })}
                      />
                      {this.state.errors.name && (
                        <div className="invalid-feedback">
                          {this.state.errors.name}
                        </div>
                      )}
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Email</label>
                      <input
                        name="email"
                        placeholder="Enter Email.."
                        type="email"
                        onChange={this.onChangeText}
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": this.state.errors.email
                        })}
                      />
                      {this.state.errors.name && (
                        <div className="invalid-feedback">
                          {this.state.errors.email}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Person To Visit</label>
                      <input
                        name="personToVisit"
                        placeholder="Enter Name Of Person To Visit.."
                        type="text"
                        onChange={this.onChangeText}
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": this.state.errors.personToVisit
                        })}
                      />
                      {this.state.errors.name && (
                        <div className="invalid-feedback">
                          {this.state.errors.personToVisit}
                        </div>
                      )}
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Date Of Entry</label>
                      <input
                        name="dateOfEntry"
                        placeholder={this.state.dateOfEntry}
                        type="text"
                        className="form-control form-control-lg"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="row ">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Type Of Visit</label>
                      <div>
                        <label className="radio-inline mr-2">
                          <input
                            className="mr-2"
                            type="radio"
                            value="Meeting"
                            name="typeOfVisit"
                            onChange={this.onChangeText}
                            checked
                          />
                          Meeting
                        </label>
                        <label className="radio-inline mr-2">
                          <input
                            className="mr-2"
                            type="radio"
                            value="Delivery"
                            name="typeOfVisit"
                            onChange={this.onChangeText}
                          />
                          Delivery
                        </label>
                        <label className="radio-inline mr-2">
                          <input
                            className="mr-2"
                            type="radio"
                            value="Personal"
                            name="typeOfVisit"
                            onChange={this.onChangeText}
                          />
                          Personal
                        </label>
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Time Of Entry</label>
                      <input
                        name="timeOfEntry"
                        placeholder="Enter Time Of Entry.."
                        type="time"
                        value={this.state.timeOfEntry}
                        onChange={this.onChangeText}
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": this.state.errors.timeOfEntry
                        })}
                      />
                      {this.state.errors.name && (
                        <div className="invalid-feedback">
                          {this.state.errors.timeOfEntry}
                        </div>
                      )}
                    </div>
                  </div>
                  <input
                    type="submit"
                    value="Add Visitor"
                    className="btn btn-primary btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Addvisitor;
