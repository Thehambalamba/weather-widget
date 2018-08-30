import React from "react";
import Info from "./info";

class WeatherExtraInfo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="extra-info-container">
          <div className="info-wrap">
            <Info />
            <Info />
            <Info />
            <Info />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WeatherExtraInfo;
