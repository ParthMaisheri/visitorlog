import React, { Component } from "react";
import Visitor from "./Visitor";
import { Consumer } from "../../context";

class Visitors extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { visitors } = value;
          console.log(value);
          return (
            <div>
              <div>
                <h1 className="diplay-4">
                  {" "}
                  <span>Visitor</span>List
                </h1>
                {visitors.map(visitor => (
                  <Visitor key={visitor.id} visitor={visitor} />
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Visitors;
