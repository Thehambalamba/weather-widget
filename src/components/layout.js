import React from "react";
import WeatherMainInfo from "./weather-main-info";
import WeatherExtraInfo from "./weather-extra-info";

const weatherInfoMain = {
  temperature: 30,
  weather: 'Sunny',
  lastUpdated: '4 min',
  icon: "../assets/icons/sun.svg"
};

const weatherInfoExtra = [{
    value: 87,
    text: 'Humidity'
  },
  {
    value: 25,
    text: 'Dew Pt.'
  },
  {
    value: 0 / 10,
    text: 'UV Index'
  },
  {
    value: 3,
    text: 'Visibility'
  }
];

class Layout extends React.Component {
  render() {
    return (
    <div className="flex-container">
      <div className="row"> 
        <WeatherMainInfo 
          temperature={weatherInfoMain.temperature}
          weather={weatherInfoMain.weather}
          lastUpdated={weatherInfoMain.lastUpdated}
          icon={weatherInfoMain.icon} />
        <WeatherExtraInfo 
          info={weatherInfoExtra} />
      </div>
    </div>
    );
  }
}

export default Layout;
