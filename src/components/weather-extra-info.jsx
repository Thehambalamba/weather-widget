import React from "react";
import Info from "./info";

class WeatherExtraInfo extends React.Component {
  renderInfo(infoArr) {
    return infoArr.map((element, index) => {
      return (
        <Info value={element.value} name={element.name} key={index}/>
      );
    });
  }

  render() {
    return (
      <section className="extra-info-container">
        <div className="info-wrap">
          {
            this.renderInfo(this.props.extraInfo)
          } 
        </div>
      </section>
    );
  }
}

export default WeatherExtraInfo;
