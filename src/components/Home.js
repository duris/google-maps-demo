import React, { Component, useMemo } from "react";
import {
  GoogleMap,
  LoadScript,
  useGoogleMap,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  return <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }}></GoogleMap>;
}
