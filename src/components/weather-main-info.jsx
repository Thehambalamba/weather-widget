import React from "react";

class WeatherMainInfo extends React.Component {
  render() {
    return (
      <section className="main-info-container">
        <div className="info-and-icon"> 
          <div className="info"> 
            <span>30</span><sup>.</sup>
            <p>Sunny</p> 
          </div> 
          <div className="icon"> 
            <img src={require('../assets/icons/sun.svg')} alt="current weather icon"/>
          </div> 
        </div> 
        <div className="bottom">
          <img src={require('../assets/icons/refresh.svg')} alt="refresh icon"/>
          <div className="txt">Updated <strong>4 minutes</strong> ago.</div>
        </div> 
      </section>
    );
  }
}

export default WeatherMainInfo;
