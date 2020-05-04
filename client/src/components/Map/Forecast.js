import React from "react";
import styled from "styled-components";
import { formatDateNow } from "../../utils/util";
import LoadImage from "../../assets/loader.gif";
import Cards from "./Cards";

const ForecastContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 5%;
`;
const Loader = styled.div`
  margin: auto;
  width: 50%;
  text-align: center;
  img {
    height: 150px;
    width: 150px;
  }
`;
const Forecast = ({ list = [], isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Loader>
          <img src={LoadImage} alt="loading.." />
        </Loader>
      ) : (
        <ForecastContainer>
          {list.map((day, index) => (
            <Cards
              key={index}
              weather={day.weather}
              main={{
                temp: day.temp.day,
                temp_max: day.temp.max,
                temp_min: day.temp.min,
                feels_like: day.feels_like,
                humidity: day.humidity,
              }}
              date={formatDateNow(day.dt)}
              wind={{ speed: day.speed, deg: day.deg }}
              margin={3}
            />
          ))}
        </ForecastContainer>
      )}
    </>
  );
};
export default Forecast;
