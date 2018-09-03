import React from "react";
import DailyInfo from "./daily-info";
import { getIconName, mapData } from '../helpers/helpers';

class WeatherMain extends React.Component {
  state = {
    currentCity: 'Belgrade'
  }

  onCityChange = (dispatch, e) => {
    const city = e.target.innerHTML;
    this.setState({ currentCity: city});
    fetch(`http://api.apixu.com/v1/forecast.json?key=${process.env.REACT_APP_KEY}&q=${city}&days=8`)
      .then(response => response.json())
      .then(weather => {
        const newState = mapData(weather);

        dispatch({ type: "CHANGE_CITY", payload: newState });
      });
  }

  renderDaily(dailyArr) {
    return dailyArr.map((element, index) => {
      const icon = getIconName(element.weatherDescription, 1);
      return (
        <DailyInfo date={element.date} temperature={element.temperature} icon={icon} key={index} index={index} img={this.state.currentCity} />
      );
    });
  }
  
  render() {
    const backgroundImgStyle = { 
      backgroundImage: `
      linear-gradient(
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2)
      ),
      url(${require(`../assets/images/${this.state.currentCity === 'Belgrade' ? 'bg-2' : 'ns'}.jpg`)})
      `, 
      backgroundPosition: '2% top', 
      backgroundRepeat: 'no-repeat', 
      transition: 'background-image 0.6s ease-in' 
    };

    return (
      <section className="main-container" style={backgroundImgStyle}>
        <div className="title-wrap">
          <div className="dropdown">
            <h1 className="title-city">
              {this.props.cityName.toUpperCase()}
              <i className="fas fa-chevron-down"></i>
            </h1>
            <div className="dropdown-content">
              <div onClick={this.onCityChange.bind(this, this.props.dispatch)}>{
                this.state.currentCity === 'Belgrade' ? 'Novi Sad' : 'Belgrade'}
              </div>
            </div>
          </div>
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
