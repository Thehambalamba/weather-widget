import React from "react";
import TimeAgo from 'timeago-react';
import { getIconName } from '../helper/helpers';

class WeatherMainInfo extends React.Component {
  render() {
    const icon = getIconName(this.props.weatherDescription, this.props.isDay);
    console.log(icon);
    return (
      <section className="main-info-container">
        <div className="info-and-icon"> 
          <div className="info"> 
            <span>{this.props.temperature}</span><sup>.</sup>
            <p>{this.props.weatherDescription}</p> 
          </div> 
          <div className="icon"> 
            <img src={require(`../assets/icons/${icon}`)} alt="current weather icon"/>
          </div> 
        </div> 
        <div className="bottom">
          <img src={require('../assets/icons/refresh.svg')} alt="refresh icon"/>
          <div className="txt">
            Updated <strong><TimeAgo datetime={this.props.lastUpdated} locale='en' />.</strong>
          </div>
        </div> 
      </section>
    );
  }
}

export default WeatherMainInfo;
