import React from "react";

class WeatherMainInfo extends React.Component {
  render() {
    return (
      <React.Fragment>
       <section className="container">
        <div className="info-and-icon">
          <div className="info">
            <span>{this.props.temperature}<sup>.</sup></span>
            <p>{this.props.weather}</p>
          </div>
          <div className="icon">
          <img src={this.props.icon} alt="weatherIcon"/>
          </div >
        </div>
        <div className="bottom">
        </div>
       </section>
      </React.Fragment>
    );
  }
}

export default WeatherMainInfo;
