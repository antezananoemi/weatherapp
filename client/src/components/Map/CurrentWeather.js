import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import LoadImage from "../../assets/loader.gif";

const IndividualCard = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
`;
const CityTitle = styled.kbd`
  margin-top: 5%;
  margin-bottom: 5%;
`;
const ChildContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
const Loader = styled.img`
  height: 150px;
  width: 150px;
`;

const DaysContainer = styled.div`
  margin-top: 10%;
  input[type="number"] {
    width: 84px;
  }
`;
const CurrentWeather = ({
  place,
  forecast,
  weather,
  isLoading,
  setForecast,
  setDays,
  days,
}) => {
  const handleChange = (e) => {
    if (days > 0 && days < 16) {
      setForecast(!forecast);
    } else {
      setForecast(false);
      setDays(0);
    }
  };
  const handleInput = (e) => {
    if (e.target.value > 15) {
      setDays(0);
    } else {
      setDays(e.target.value);
    }
  };

  return (
    <IndividualCard>
      {weather && !isLoading && (
        <CityTitle className="text-center h3">
          {place ? place.place_name : weather.name}
        </CityTitle>
      )}
      <ChildContainer>
        {weather && !isLoading ? (
          <>
            <Cards forecast={forecast} {...weather} padding={10} />
            <DaysContainer>
              <cite>Forecast for the next {days && days} days</cite>
              <div className="input-group float-right">
                <label className="form-switch ">
                  <input
                    type="checkbox"
                    checked={forecast}
                    onChange={(e) => handleChange(e)}
                  />
                  <i
                    className="form-icon tooltip"
                    data-tooltip="Please add the days from 1 to 15 on the input"
                  ></i>
                </label>
                <input
                  disabled={false}
                  onChange={(e) => handleInput(e)}
                  type="number"
                  min="1"
                  max="16"
                  placeholder="days"
                  value={days}
                ></input>
              </div>
            </DaysContainer>
          </>
        ) : (
          <Loader src={LoadImage} alt="loading.." />
        )}
      </ChildContainer>
    </IndividualCard>
  );
};

export default CurrentWeather;
