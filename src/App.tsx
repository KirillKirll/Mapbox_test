import React from "react";
import "./App.css";
import Map from "react-map-gl";

const TOKEN =
  "pk.eyJ1Ijoia2lyaWxsbGx2IiwiYSI6ImNrcHh1NXIzZzBlb2cyd253d2t2bmo1bWEifQ.1y30G02TkPr-TRYHLCpHDA";

interface viewport {
  latitude: number;
  longitude: number;
  width: string;
  height: string;
  zoom: number;
}

function App() {
  const [viewport, setViewport] = React.useState<viewport>({
    latitude: 53.902334,
    longitude: 27.5618791,
    width: "100vw",
    height: "100vh",
    zoom: 13,
  });

  return (
    <div className="App">
      <Map
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        onViewportChange={(viewport: any) => setViewport(viewport)}></Map>
    </div>
  );
}

export default App;
