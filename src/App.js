import logo from "./logo.svg";
import "./App.css";
import DirectionsForm from "./components/DirectionsForm";
import { useEffect, useState } from "react";
import Map from "./components/Map";
// import Home from "./components/Home";

function App() {
  const [location, setLocation] = useState({
    start: "Pataskala, Ohio",
    end: "Columus, Ohio",
  });
  const [startLocation, setStartLocation] = useState("Pataskala, Ohio");
  const [endLocation, setEndLocation] = useState("Columbus, Ohio");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    console.log("setting location");
    switch (e.target.name) {
      case "startLocation":
        setStartLocation(e.target.value);
        break;
      case "endLocation":
        setEndLocation(e.target.value);
        break;

      default:
        break;
    }
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
          location={location}
          setLocation={setLocation}
          loading={loading}
          setLoading={setLoading}
        />
        <Map
          location={location}
          startLocation={startLocation}
          loading={loading}
          setLoading={setLoading}
        />
      </main>
    </div>
  );
}

export default App;
