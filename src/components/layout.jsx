import React from "react";
import WeatherMainInfo from "./weather-main-info";
import WeatherExtraInfo from "./weather-extra-info";
import WeatherMain from "./weather-main";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { apiKey: 'b08de257857046a4b8213455183108', currentCity: 'Belgrade' };
    this.getData(this.state.currentCity, this.state.apiKey);
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
            currentDate: this.getDayName(weather.location.localtime)
          },
          mainInfo: {
            temperature: weather.current.temp_c,
            weatherDescription: weather.current.condition.text,
            lastUpdated: weather.current.last_updated
          },
          extraInfo: [
            {
              value: weather.current.humidity,
              name: 'Humidity',
            },
            {
              value: weather.current.feelslike_c,
              name: 'Feels like',
            },
            {
              value: weather.forecast.forecastday[0].day.uv,
              name: 'UV Index',
            },
            {
              value: weather.current.vis_km,
              name: 'Visibility',
            }
          ],
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

  getDayName(dateStr) {
    let date = new Date(dateStr);
    console.log(date);
    const dayName = date.toLocaleDateString('en-us', { weekday: 'long' });
    return `${date.getDate()} ${dayName.toUpperCase()}`;
  }

  componentDidMount() {
    
  }

  render() {
    if (this.state.main) {
      return (
        <div className="container fade-in">
          <div className="column">
            <WeatherMainInfo />
            <WeatherExtraInfo extraInfo={this.state.extraInfo} />
          </div>
          <WeatherMain cityName={this.state.main.cityName} currentDate={this.state.main.currentDate} dailyArr={this.state.daily} />
        </div>
      );
    } else {
      return (<div className="loader"></div>)
    }
  }
}

export default Layout;
