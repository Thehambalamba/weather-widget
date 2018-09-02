import React from "react";
import { getSmallDayName } from '../helpers/helpers';
import img from '../assets/images/ns.jpg';

const DailyInfo = props => (
  <div className="daily-info-wrap">
    <div className="blur" 
      style={{ backgroundImage: `url(${require(`../assets/images/${props.img === 'Belgrade' ? 'bg-2' : 'ns'}.jpg`)})`, 
      backgroundRepeat: 'no-repeat', transition: 'background-image 0.6s ease-in', backgroundPosition: `${props.index === 0 ? '1% 71%' : props.index === 1 ? props.index * 9 + '% 71%' : props.index * 9 - props.index + 1 + '% 71%'}`}}>
    </div>
    <div className="transparent-wrap">
      <div className="img-wrap">
        <img
          src={require(`../assets/icons/${props.icon}`)}
          alt="current weather icon"
        />
      </div>
      <div className="temperature-single">
        {parseInt(props.temperature)}
        <sup>.</sup>
      </div>
      <p>{getSmallDayName(props.date)}</p>
    </div>
  </div>
);

export default DailyInfo;