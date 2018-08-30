import React from "react";

class WeatherMain extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="main-container">
          <div className="title-wrap">
            <h1>{this.props.name}</h1>
            <p>{this.props.date}</p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WeatherMain;
