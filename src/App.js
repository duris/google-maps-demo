import logo from "./logo.svg";
import "./App.css";
import DirectionsForm from "./components/DirectionsForm";
import { useEffect, useState } from "react";
import Map from "./components/Map";
// import Home from "./components/Home";

function App() {
  const [location, setLocation] = useState({
    lat: -3.745,
    lng: -38.523,
  });

  const [startLocation, setStartLocation] = useState("Pataskala, Ohio");
  const [endLocation, setEndLocation] = useState("");

  const handleChange = (event) => {
    switch (event.target.name) {
      case "startLocation":
        setStartLocation(event.target.value);
        break;
      case "endLocation":
        setEndLocation(event.target.value);
        break;

      default:
        break;
    }

    console.log("setting location");

    setTimeout(() => {
      setLocation({
        lat: Number(startLocation),
        lng: Number(endLocation),
      });
    }, 1500);
  };

  return (
    <div className="App">
      <main>
        <DirectionsForm
          handleChange={handleChange}
          startLocation={startLocation}
          setStartLocation={setStartLocation}
          endLocation={endLocation}
          setEndLocation={setEndLocation}
        />
        <Map location={location} startLocation={startLocation} />
      </main>
    </div>
  );
}

export default App;
