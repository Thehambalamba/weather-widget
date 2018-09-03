import React from "react";
import TimeAgo from 'timeago-react';
import { getIconName, mapData } from "../helpers/helpers";
import Chart from "./chart";

class WeatherMainInfo extends React.Component {
  state = {
    svgProps: {
      viewBox: "100 200 300 250"
    },
    animate: false
  };

  getNewData(dispatch, e) {
    const icon = e.target;

    this.setState((prevState) => {
      return { ...prevState, animate: true };
    });

    // This is very very bad
    setTimeout(() => {
      this.setState((prevState) => {
        return { ...prevState, animate: false };
      });
    }, 1000);

    icon.classList.add("spin");

    // This is very very bad aswell
    setTimeout(() => {
      icon.classList.remove("spin");
    }, 1000);

    fetch(
      `http://api.apixu.com/v1/forecast.json?key=${
        process.env.REACT_APP_KEY
      }&q=${this.props.cityName}&days=8`
    )
      .then(response => response.json())
      .then(weather => {
        const newState = mapData(weather);
        dispatch({ type: "REFRESH_DATA", payload: newState });
      });
  }

  render() {
    const icon = getIconName(this.props.weatherDescription, this.props.isDay);
    return (
      <section className="main-info-container">
        <div className="info-and-icon">
          <div className="info">
            <span>{this.props.temperature}</span>
            <sup>.</sup>
            <p>{this.props.weatherDescription}</p>
          </div>
          <div className="icon">
            <img
              className="refresh"
              src={require(`../assets/icons/${icon}`)}
              alt="current weather icon"
            />
          </div>
        </div>
        <div className="bottom">
          <img
            className="refresh"
            onClick={this.getNewData.bind(this, this.props.dispatch)}
            src={require("../assets/icons/refresh.svg")}
            alt="refresh icon"
          />
          <div className="txt" ref="TimeAgo">
            Updated{" "}
            <strong>
              <TimeAgo datetime={this.props.lastUpdated} locale="en" />.
            </strong>
          </div>
        </div>
        <Chart {...this.state} />
      </section>
    );
  }
}

export default WeatherMainInfo;
