import React from "react";
import "./App.css";
import Map, { Marker, Source, Layer } from "react-map-gl";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const TOKEN =
  "pk.eyJ1Ijoia2lyaWxsbGx2IiwiYSI6ImNrcHh1NXIzZzBlb2cyd253d2t2bmo1bWEifQ.1y30G02TkPr-TRYHLCpHDA";

interface viewport {
  latitude: number;
  longitude: number;
  width: string;
  height: string;
  zoom: number;
}

interface MarkerTypes {
  latitude: any;
  longitude: any;
  index: number;
}

interface GeoJSON {
  type: any;
  properties: object;
  geometry: any;
}

interface LayerStyle {
  id: any;
  type: any;
  source: any;
  layout: object;
  paint: object;
}

const geojson: GeoJSON = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "LineString",
    coordinates: [
      [27.604389, 53.949264],
      [27.452036, 53.949264],
      [27.452036, 53.859167],
      [27.604389, 53.859167],
      [27.604389, 53.949264],
    ],
  },
};

const lineOne: GeoJSON = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "LineString",
    coordinates: [
      [27.604389, 53.904264],
      [27.452036, 53.904264],
    ],
  },
};

const lineTwo: GeoJSON = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "LineString",
    coordinates: [
      [27.530389, 53.859167],
      [27.530389, 53.949264],
    ],
  },
};

const layerStyle: LayerStyle = {
  id: "route",
  type: "line",
  source: "route",
  layout: {
    "line-join": "round",
    "line-cap": "round",
  },
  paint: {
    "line-color": "#8B0000",
    "line-width": 2,
  },
};

const layerOne: LayerStyle = {
  id: "routeOne",
  type: "line",
  source: "route",
  layout: {
    "line-join": "round",
    "line-cap": "round",
  },
  paint: {
    "line-color": "#8B0000",
    "line-width": 2,
  },
};

const layerTwo: LayerStyle = {
  id: "routeTwo",
  type: "line",
  source: "route",
  layout: {
    "line-join": "round",
    "line-cap": "round",
  },
  paint: {
    "line-color": "#8B0000",
    "line-width": 2,
  },
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(2),
      },
    },
  }),
);

const App: React.FC = () => {
  const classes = useStyles();
  const [viewport, setViewport] = React.useState<viewport>({
    latitude: 53.902334,
    longitude: 27.5618791,
    width: "100vw",
    height: "100vh",
    zoom: 12,
  });
  const [marker, setMarker] = React.useState<MarkerTypes[]>([]);
  const [isSquareSplitted, setIsSquareSplitted] = React.useState<boolean>(false);

  const handleMarkers = () => {
    for (let i = 0; i < 40; i++) {
      const getRandomCoordinate = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      };

      const dots = {
        latitude: getRandomCoordinate(53.859167, 53.949264),
        longitude: getRandomCoordinate(27.452036, 27.594389),
        index: i + 1,
      };

      setMarker((state) => {
        return [...state, dots];
      });
    }
  };

  const handleSplitBorders = () => {
    setIsSquareSplitted(true);
  };

  const sectorColors = (el: any) => {
    if (isSquareSplitted) {
      if (el.longitude > 27.530389 && el.latitude > 53.904264) return { background: "yellow" };
      if (el.longitude > 27.530389 && el.latitude < 53.904264) return { background: "blue" };
      if (el.latitude > 53.904264) return { background: "green" };
      if (el.latitude < 53.904264) return { background: "purple" };
    } else return;
  };

  return (
    <div className="App">
      <Map
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        onViewportChange={(viewport: any) => setViewport(viewport)}>
        <div className={classes.root}>
          <Button variant="contained" color="primary" onClick={handleMarkers}>
            markers
          </Button>
          <Button variant="contained" color="primary" onClick={handleSplitBorders}>
            split
          </Button>
        </div>
        <Source id="lineLayer" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
        {isSquareSplitted ? (
          <>
            <Source id="lineOne" type="geojson" data={lineOne}>
              <Layer {...layerOne} />
            </Source>
            <Source id="lineTwo" type="geojson" data={lineTwo}>
              <Layer {...layerTwo} />
            </Source>
          </>
        ) : null}
        {marker.map((element: any, id) => {
          return (
            <Marker latitude={element.latitude} longitude={element.longitude} key={id}>
              <div className="circle" style={sectorColors(element)}>
                <span>{element.index}</span>
              </div>
            </Marker>
          );
        })}
      </Map>
    </div>
  );
};

export default App;
