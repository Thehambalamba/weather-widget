import React from 'react'
import { getDayName } from "../helpers/helpers";

const Context = React.createContext();

export class Provider extends React.Component {
  state = { currentCity: 'Belgrade'}

  async getWeather(cityName) {
    try {
      const response = await fetch(`http://api.apixu.com/v1/forecast.json?key=${process.env.REACT_APP_KEY}&q=${cityName}&days=8`);

      const responseData = await response.json();

      return responseData;
    } catch (err) {
      console.error('Error', err.message);
    }
  }

  getData(cityName) {
    this.getWeather(cityName)
      .then(weather => {
        const newState = {
          main: {
            cityName: weather.location.name,
            currentDate: getDayName(weather.location.localtime)
          },
          mainInfo: {
            temperature: weather.current.temp_c,
            weatherDescription: weather.current.condition.text,
            lastUpdated: weather.current.last_updated,
            isDay: weather.current.is_day
          },
          extraInfo:
            [{ value: weather.current.humidity, name: 'Humidity' },
            { value: weather.current.feelslike_c, name: 'Feels like' },
            { value: weather.forecast.forecastday[0].day.uv, name: 'UV Index' },
            { value: weather.current.vis_km, name: 'Visibility' }
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
      });
  }


  componentDidMount() {
    this.getData(this.state.currentCity);
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
