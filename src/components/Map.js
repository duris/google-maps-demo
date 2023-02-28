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

const Map = ({ location, startLocation, setLoading }) => {
  const [response, setResponse] = useState("");

  function directionsCallback(response) {
    if (response != null) {
      console.log(response);
      switch (response.status) {
        case "OK":
          setResponse(response);
          break;

        default:
          break;
      }
    }
  }

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} zoom={14}>
        <DirectionsService
          // required
          options={{
            destination: location.end,
            origin: location.start,
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
