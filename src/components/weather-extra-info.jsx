import React from "react";
import Info from "./info";

class WeatherExtraInfo extends React.Component {
  render() {
    return (
      <section className="extra-info-container">
        <div className="info-wrap">
          <Info />
          <Info />
          <Info />
          <Info />
        </div>
      </section>
    );
  }
}

export default WeatherExtraInfo;
