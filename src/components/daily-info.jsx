import React from "react";
import { getSmallDayName } from '../helpers/helpers';

const DailyInfo = props => (
  <div className="daily-info-wrap">
    <div className="blur"></div>
    <div className="img-wrap">
      <img
        src={require(`../assets/icons/${props.icon}`)}
        alt="current weather icon"
      />
    </div>
    <div className="temperature-single">
      {props.temperature.toFixed()}
      <sup>.</sup>
    </div>
    <p>{getSmallDayName(props.date)}</p>
  </div>
);

export default DailyInfo;