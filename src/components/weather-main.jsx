import React from "react";
const date = new Date(),
  locale = "en-us",
  month = date.toLocaleString(locale, { month: "long" }),
  dateString = `${date.getDay()} ${month.toUpperCase()}`;
class WeatherMain extends React.Component {
  
  render() {
    return (
      <section className="main-container">
        <div className="title-wrap">
          <h1>{this.props.name}<i className="fas fa-chevron-down"></i></h1>
          <p>{dateString}</p>
        </div>
      </section>
    );
  }
}

export default WeatherMain;
