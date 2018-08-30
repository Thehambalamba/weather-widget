import React from "react";
import WeatherMainInfo from "./weather-main-info";
import WeatherExtraInfo from "./weather-extra-info";
import WeatherMain from "./weather-main";

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

    this.getWeather()
      .then(response => {
        console.log(response);
        // const { name } = response.city,
        // const today = response.list[0], 
        const date = new Date(),
              locale = "en-us",
              month = date.toLocaleString(locale, { month: "long" }),
              dateString = `${date.getDay()} ${month}`;

        this.setState((prevState) => {
          return { 
            ...prevState, 
            main: { currentName: 'name', date: dateString, namesArr: ['Belgrade', 'Novi Sad'] },
            // info: 
          };
        });
        // console.log(today);
      });
  }
  async getWeather() {
    // const currentWeather = fetch(`http://api.openweathermap.org/data/2.5/weather?id=${this.state.api.belgradeId}&units=metric&APPID=${this.state.api.apiKey}`)
    //   .then(response => response.json())
    //   .then(fetch(`http://api.openweathermap.org/data/2.5/uvi?appid=${this.state.api.apiKey}&lat=${response.cord.lat}&lon=${response.cord.lon}`))
    //   .then(response => response.json());
    
    // return responseData;
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="column"> 
            <WeatherMainInfo />
            <WeatherExtraInfo />
          </div>
          <WeatherMain name={this.state.main.currentName} date={this.state.main.date} cityNames={this.state.main.namesArr}/>
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
