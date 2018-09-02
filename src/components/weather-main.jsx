import React from "react";
import DailyInfo from "./daily-info";
import { getIconName } from '../helpers/helpers';

class WeatherMain extends React.Component {
  renderDaily(dailyArr) {
    return dailyArr.map((element, index) => {
      const icon = getIconName(element.weatherDescription, 1);
      return (
        <DailyInfo date={element.date} temperature={element.temperature} icon={icon} key={index} />
      );
    });
  }
  render() {
    return (
      <section className="main-container" style={{ backgroundImage: `url(${require('../assets/images/ns.jpg')})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <div className="title-wrap">
          <h1>{this.props.cityName.toUpperCase()}<i className="fas fa-chevron-down"></i></h1>
          <p>{this.props.currentDate}</p>
        </div>
        <div className="daily-wrap">
          {
            this.renderDaily(this.props.dailyArr)
          } 
        </div>
      </section>
    );
  }
}

export default WeatherMain;
