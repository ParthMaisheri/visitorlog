import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        visitors: [action.payload, ...state.visitors]
      };
    case "ADD_EXIT":
      return {
        ...state,
        visitors: state.visitors.map(visitor =>
          visitor.id === action.payload.id
            ? (visitor = action.payload)
            : visitor
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  componentWillMount() {
    const data = JSON.parse(localStorage.getItem("Visitors"));

    if (data != null) {
      this.setState({ visitors: data });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("Visitors", JSON.stringify(this.state.visitors));
  }

  state = {
    visitors: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
