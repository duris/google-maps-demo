import React, { Component, useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  useGoogleMap,
  Marker,
  useLoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const Map = ({ location, responseCount, setResponseCount }) => {
  const [response, setResponse] = useState("");

  function directionsCallback(response) {
    const myTimeout = setTimeout(() => {
      if (response != null) {
        switch (response.status) {
          case "OK":
            setResponse(response);
            setResponseCount(responseCount + 1);
            break;

          default:
            break;
        }
      }
    }, 1000);

    console.log(response.geocoded_waypoints);

    if (responseCount > response.geocoded_waypoints.length) {
      clearTimeout(myTimeout);
    }
  }

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} zoom={14}>
        <DirectionsService
          // required
          options={{
            destination: location.start,
            origin: location.end,
            travelMode: "DRIVING",
          }}
          // required
          callback={directionsCallback}
        />
        {response ? (
          <DirectionsRenderer
            options={{
              directions: response,
            }}
          />
        ) : (
          ""
        )}
      </GoogleMap>
    </LoadScript>
  );
};
export default Map;
