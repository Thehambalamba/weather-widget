import React from "react";
import WeatherMainInfo from "./weather-main-info";
import WeatherExtraInfo from "./weather-extra-info";
import WeatherMain from "./weather-main";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { apiKey: 'b08de257857046a4b8213455183108', currentCity: 'Belgrade' };
  }
  /**
   * Fetch the weather data or log errors
   * @param {string} cityName 
   * @param {string} apiKey 
   */
  async getWeather(cityName, apiKey) {
    try {
      const response = await fetch(`http://api.apixu.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=8`);
  
      const responseData = await response.json();
  
      return responseData;
    } catch (err) {
      console.error('Error', err.message);
    }
  }

  /**
   * Call the getWeatherm method with the city name and map the data to update state
   * @param {string} cityId 
   * @param {string} apiKey 
   */
  getData(cityName, apiKey) {
    this.getWeather(cityName, apiKey)
      .then(weather => {
        const newState = {
          main: {
            cityName: weather.location.name,
            currentDate: weather.location.localtime
          },
          mainInfo: {
            temperature: weather.current.temp_c,
            weatherDescription: weather.current.condition.text,
            lastUpdated: weather.current.last_updated
          },
          extraInfo: {
            humidity: weather.current.humidity,
            visibility: weather.current.vis_km,
            uv: weather.forecast.forecastday[0].day.uv,
            feelsLike: weather.current.feelslike_c
          },
          daily: weather.forecast.forecastday.map(element => {
            return {
              date: element.date,
              temperature: element.day.avgtemp_c,
              weatherDescription: element.day.condition.text,
            };
          })
        };
        this.setState((prevState) => {
          return { ...prevState, ...newState };
        });
        console.log(this.state);
      });
  }

  componentDidMount() {
    this.getData(this.state.currentCity, this.state.apiKey);
  }

  render() {
    return (
      <div className="container">
        <div className="column"> 
          <WeatherMainInfo />
          <WeatherExtraInfo />
        </div>
        <WeatherMain name={'Beograd'.toUpperCase()}/>
      </div>
    );
  }
}

export default Layout;
