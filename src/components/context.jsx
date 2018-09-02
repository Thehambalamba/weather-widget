import React from 'react'
import { mapData } from "../helpers/helpers";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_CITY":
      return {
        ...state,
        ...action.payload
      }
    case "REFRESH_DATA":
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};

export class Provider extends React.Component {
  state = { 
    currentCity: 'Belgrade',
    dispatch: action => this.setState(state => reducer(state, action))
  }

  componentDidMount() {
    fetch(`http://api.apixu.com/v1/forecast.json?key=${process.env.REACT_APP_KEY}&q=${this.state.currentCity}&days=8`)
      .then(response => response.json())
      .then(weather => {
        const newState = mapData(weather);

        this.setState((prevState) => {
          return { ...prevState, ...newState };
        });
      });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
