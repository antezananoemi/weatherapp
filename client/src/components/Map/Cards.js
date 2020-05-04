import React from "react";
import styled from "styled-components";
import sunny from "../../assets/sunny.svg";
import defImage from "../../assets/default.svg";
import rain from "../../assets/rain.svg";
import thunder from "../../assets/thunder.svg";
import cloud from "../../assets/cloud.svg";
import showers from "../../assets/showers.svg";
import { formatDateNow } from "../../utils/util";

const Card = styled.div`
  width: 350px;
  background-color: #9fa1b5;
  border-radius: 16px;
  padding: ${(p) => `${p.padding ? p.padding : "3"}%`};
  img {
    height: 150px;
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 60%;
  }
  margin: ${(p) => p.margin && p.margin}%;
`;
const MaxMin = styled.div`
  text-align: center;
  padding: 2%;
  .label {
    border-radius: 0.1rem;
    display: inline-block;
    line-height: 1.25;
    padding: 2%;
  }
  .label-light {
    background: #eef0f3;
    color: #455060;
  }
  .label-yellow {
    background: #e85600;
    color: #fff;
  }
`;
const getImage = (desc) => {
  switch (true) {
    case desc === "Fog":
      return cloud;
    case desc === "Clear":
      return sunny;
    case desc === "Clouds":
      return cloud;
    case desc === "Drizzle":
      return showers;
    case desc === "Rain":
      return rain;
    case desc === "Thunderstorm":
      return thunder;
    default:
      return defImage;
  }
};
const Cards = ({ weather, main, wind, date, dt, padding, margin }) => {
  const srcImg = getImage(weather ? weather[0].main : null);
  return (
    <Card padding={padding} margin={margin}>
      <div>
        <h4 className="mb-2">
          <mark>
            <strong> Temperature: </strong>
            {main && Math.round(main.temp)}
            <sup>o</sup>C
          </mark>
        </h4>
        <span className="label label-warning ">
          {date || formatDateNow(dt)}
        </span>
      </div>
      <img src={srcImg} alt="weather" />
      <MaxMin>
        <div className="label label-yellow">
          max: {main.temp_max} <sup>o</sup>C
        </div>
        <div className="label label-light">
          min: {main.temp_min} <sup>o</sup>C
        </div>
      </MaxMin>
      <div>
        <strong>Feels like: </strong>
        {main.feels_like.day || main.feels_like} <sup>o</sup>C
      </div>
      <div>
        <strong>Humidity:</strong> {main.humidity} %
      </div>
      <div>
        <strong>Wind: </strong>
        <span className="label label-default">
          {wind.deg}
          <sup>o</sup>
        </span>{" "}
        <strong>Speed: </strong>
        <span className="label label-secondary">{wind.speed}</span>
      </div>
      <em>
        <strong>Description: </strong>
        {weather[0].description}
      </em>
    </Card>
  );
};
export default Cards;
