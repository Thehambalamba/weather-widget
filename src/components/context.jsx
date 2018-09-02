import React from 'react'

const Context = React.createContext();

export default class Provider extends React.Component {
  state = {
    // main: {
    //   cityName: weather.location.name,
    //   currentDate: getDayName(weather.location.localtime),
    //   cityName: 'Belgrade'
    // },
    // mainInfo: {
    //   temperature: weather.current.temp_c,
    //   weatherDescription: weather.current.condition.text,
    //   lastUpdated: weather.current.last_updated,
    //   isDay: weather.current.is_day
    // },
    // extraInfo:
    //   [{ value: weather.current.humidity, name: 'Humidity' },
    //   { value: weather.current.feelslike_c, name: 'Feels like' },
    //   { value: weather.forecast.forecastday[0].day.uv, name: 'UV Index' },
    //   { value: weather.current.vis_km, name: 'Visibility' }
    //   ],
    // daily: weather.forecast.forecastday.map(element => {
    //   return {
    //     date: element.date,
    //     temperature: element.day.avgtemp_c,
    //     weatherDescription: element.day.condition.text,
    //   };
    // })
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
