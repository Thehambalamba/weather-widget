import React from "react";

const Info = (props) => (
  <div className="info-single-wrap">
    <h1>
      {props.name === 'UV Index' ? '0/' : ''}
      {parseInt(props.value)}
      {props.name === 'Humidity' ? '%' : ''|| props.name === 'Visibility' ? 'km' : '' }
      <sup className="small-sup">{props.name === 'Feels like' ? '.' : '' }</sup>
    </h1>
    <p>{props.name}</p>
  </div>
);

export default Info;