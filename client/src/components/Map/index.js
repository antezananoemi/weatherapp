import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import MapComponent from "./MapComponent";
import ForecastComponent from "./Forecast";
import CurrentWeather from "./CurrentWeather";

const MapContainer = styled.div`
  padding-top: 60px;
  margin-top: 60px;
  padding-bottom: 60px;
  background-color: #fdc7bc;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;
const ErrorMessage = styled.span`
  margin-top: 5%;
`;

const MapContent = () => {
  const defaultPoint = {
    lat: -16.503399,
    lon: -68.131649,
  };
  let fCast = useRef();
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);
  const [days, setDays] = useState(0);
  const [place, setPlace] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingF, setIsLoadingF] = useState(true);
  const [forecast, setForecast] = useState(false);
  const [selected, setSelected] = useState({
    lat: defaultPoint.lat,
    lon: defaultPoint.lon,
    clicked: true,
  });
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/weather/${selected.lat}/${selected.lon}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((json) => {
        setPlace(json.place);
        setIsLoading(false);
        setWeather(json);
      })
      .catch((err) => {
        setError(true);
      });
  }, [selected]);
  useEffect(() => {
    if (forecast && days > 0 && days < 16) {
      setIsLoadingF(true);
      fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/forecast?lat=${selected.lat}&lon=${selected.lon}&cnt=${days}`
      )
        .then((res) => res.json())
        .then((json) => {
          setWeatherForecast(json);
          setIsLoadingF(false);
          fCast.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
    }
  }, [forecast, selected, days]);

  return (
    <>
      <MapContainer>
        <MapComponent
          setSelected={setSelected}
          setForecast={setForecast}
          defaultPoint={defaultPoint}
        />
        {error ? (
          <ErrorMessage className="label label-error">
            Something went wrong!, maybe you forgot to place you API Key on
            local variables or you API access expired or reached the max limit
          </ErrorMessage>
        ) : (
          <CurrentWeather
            isLoading={isLoading}
            weather={weather}
            place={place}
            forecast={forecast}
            setForecast={setForecast}
            days={days}
            setDays={setDays}
          />
        )}
      </MapContainer>

      <div ref={fCast}>
        {forecast && (
          <ForecastComponent {...weatherForecast} isLoading={isLoadingF} />
        )}
      </div>
    </>
  );
};
export default MapContent;
