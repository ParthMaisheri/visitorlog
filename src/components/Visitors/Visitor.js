import React, { Component } from "react";
import { Consumer } from "../../context";

class Visitor extends Component {
  state = {
    showContactInfo: false
  };

  showHide = () => {
    console.log("HSOWHIDE");
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };
  onChangeText = e => this.setState({ [e.target.name]: e.target.value.trim() });

  submitForm = (dispatch, id) => {
    const data = {
      id: id,
      ...this.props.visitor,
      timeOfExit: this.state.timeOfExit
    };

    dispatch({ type: "ADD_EXIT", payload: data });
  };

  render() {
    const {
      id,
      name,
      photo,
      email,
      typeOfVisit,
      personToVisit,
      dateOfEntry,
      timeOfEntry,
      timeOfExit
    } = this.props.visitor;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  onClick={this.showHide}
                  className="fa fa-sort-down"
                  style={{ cursor: "pointer" }}
                ></i>
                {timeOfExit === "" ? (
                  <i
                    className="fa fa-question"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "green"
                    }}
                  ></i>
                ) : null}
              </h4>
              {this.state.showContactInfo ? (
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src={photo}
                      class="card-img rounded-circle"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <ul className="list-group">
                      <li className="list-group-item">Email: {email} </li>
                      <li className="list-group-item">
                        Type of visit: {typeOfVisit}
                      </li>
                      <li className="list-group-item">
                        Person to visit: {personToVisit}
                      </li>
                      <li className="list-group-item">
                        Date of entry: {dateOfEntry}
                      </li>
                      <li className="list-group-item">
                        Time of entry: {timeOfEntry}
                      </li>
                      {timeOfExit !== "" ? (
                        <li className="list-group-item">
                          Time of exit: {timeOfExit}
                        </li>
                      ) : (
                        <form
                          onSubmit={this.submitForm.bind(this, dispatch, id)}
                        >
                          <div className="form-group form-inline list-group-item">
                            <input
                              name="timeOfExit"
                              placeholder="Time Of Exit.."
                              type="time"
                              onChange={this.onChangeText}
                              className="form-control"
                            />
                            <input
                              type="submit"
                              value="Add Time"
                              className="btn btn-light btn-block"
                            />
                          </div>
                        </form>
                      )}
                    </ul>
                  </div>
                </div>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Visitor;
