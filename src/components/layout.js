import React from "react";
import WeatherMainInfo from "./weather-main-info";
import WeatherExtraInfo from "./weather-extra-info";
import WeatherMain from "./weather-main";

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
  constructor(props) {
    super(props);
    this.state = {
      api: {
        apiKey: 'b88bf8adc3ad7bcfcb02cce53a98775d',
        belgradeId: '792680',
        noviSadId: '3194360',
        currentCity: 1
      },
      main: {},
      info: {},
      moreInfo: {},
      dailyInfo: {}
    };
  }

  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${this.state.api.belgradeId}&APPID=${this.state.api.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  componentDidMount() {
    this.getWeather()
      .then(response => {
        this.setState(response)
      });
  }

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
        <WeatherMain />
      </div>
    </div>
    );
  }
}

export default Layout;
