import React, { useState, useRef } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 15%;
  margin-right: 15%;
`;

const MapComponent = ({ setSelected, setForecast, defaultPoint }) => {
  const [viewport, setViewport] = useState({
    width: "70vw",
    height: "65vh",
    latitude: defaultPoint.lat,
    longitude: defaultPoint.lon,
    zoom: 3,
  });
  const [marker, setMarker] = useState({
    latitude: defaultPoint.lat,
    longitude: defaultPoint.lon,
  });
  let mapRef = useRef();

  const handleViewportChange = (param) => {
    setViewport({ ...viewport, ...param });
  };

  const handleGeocoderViewportChange = (prm) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };
    setMarker({
      longitude: prm.longitude,
      latitude: prm.latitude,
    });
    setSelected({
      lat: prm.latitude,
      lon: prm.longitude,
    });
    setForecast(false);
    return handleViewportChange({
      ...prm,
      ...geocoderDefaultOverrides,
    });
  };

  return (
    <Container>
      <ReactMapGL
        ref={mapRef}
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
        onViewportChange={(viewport) => handleViewportChange(viewport)}
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={(v) => handleGeocoderViewportChange(v)}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          position="top-left"
        />

        <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
          offsetTop={-20}
          offsetLeft={-10}
        >
          <i className="icon icon-location icon-2x text-light"></i>
        </Marker>
      </ReactMapGL>
    </Container>
  );
};
export default MapComponent;
