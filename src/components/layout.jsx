import React from "react";
import WeatherMainInfo from "./weather-main-info";
import WeatherExtraInfo from "./weather-extra-info";
import WeatherMain from "./weather-main";
import { Provider } from './context';
import { Consumer } from "./context";

class Layout extends React.Component {
  render() {
      return (
        <Provider>
          <Consumer>
            {value => {
              if (value.main) {
                const { temperature, weatherDescription, lastUpdated, isDay } = value.mainInfo,
                      { extraInfo } = value,
                      { cityName, currentDate } = value.main,
                      { daily } = value;
                return (  
                <React.Fragment>
                  <div className="container fade-in">
                    <div className="column">
                      <WeatherMainInfo
                        temperature={temperature}
                        weatherDescription={weatherDescription}
                        lastUpdated={lastUpdated}
                        isDay={isDay} />
                      <WeatherExtraInfo extraInfo={extraInfo} />
                    </div>
                    <WeatherMain
                      cityName={cityName}
                      currentDate={currentDate}
                      dailyArr={daily} />
                  </div>
                </React.Fragment>
                )
              } else {
                return <div className="spinner" />;
              }
            }}
          </Consumer>
        </Provider>
      );
  }
}

export default Layout;
