import React from "react";

class WeatherMain extends React.Component {
  render() {
    return (
      <section className="main-container">
        <div className="title-wrap">
          <h1>{this.props.cityName.toUpperCase()}<i className="fas fa-chevron-down"></i></h1>
          <p>{this.props.currentDate}</p>
        </div>
      </section>
    );
  }
}

export default WeatherMain;
