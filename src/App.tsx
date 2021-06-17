import React from "react";
import "./App.css";
import Map from "react-map-gl";
import { Viewport, MarkerTypes } from "./types/types";
import { DEFAULT } from "./utils/utils";
import { geojson, lineHorizontal, lineVertical } from "./coordinates";
import { layerBorder, layerHorizontal, layerVertical } from "./layers/layers";
import Buttons from "./components/Buttons";
import Markers from "./components/Markers";
import SourceLayer from "./components/SourceLayer";

const App: React.FC = () => {
  const [viewport, setViewport] = React.useState<Viewport>(DEFAULT);
  const [markers, setMarker] = React.useState<MarkerTypes[]>([]);
  const [isSquareSplitted, setIsSquareSplitted] = React.useState<boolean>(false);

  return (
    <div className="App">
      <Map
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport: Viewport) => setViewport(viewport)}>
        <Buttons setIsSquareSplitted={setIsSquareSplitted} setMarker={setMarker} />
        <SourceLayer id="lineLayer" data={geojson} layerData={layerBorder} />
        {isSquareSplitted ? (
          <>
            <SourceLayer id="lineHorizontal" data={lineHorizontal} layerData={layerHorizontal} />
            <SourceLayer id="lineVertical" data={lineVertical} layerData={layerVertical} />
          </>
        ) : null}
        <Markers markers={markers} isSquareSplitted={isSquareSplitted} />
      </Map>
    </div>
  );
};

export default App;
