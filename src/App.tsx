import React from "react";
import "./App.css";
import Map, { Marker } from "react-map-gl";
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
    zoom: 11,
  });
  const [marker, setMarker] = React.useState<MarkerTypes[]>([]);
  console.log(marker);

  const handleClick = () => {
    for (let i = 0; i < 40; i++) {
      const getRandomCoordinate = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      };

      const dots = {
        latitude: getRandomCoordinate(53.857974, 53.942472),
        longitude: getRandomCoordinate(27.48243, 27.570224),
        index: i + 1,
      };

      setMarker((state) => {
        return [...state, dots];
      });
    }

    // latitude:
    // getRandomLatitude(54.000472, 53.794074),
    // // longitude:
    // getRandomLongitude(27.31243, 27.788224),
  };

  return (
    <div className="App">
      <Map
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        onViewportChange={(viewport: any) => setViewport(viewport)}>
        <div className={classes.root}>
          <Button variant="contained" color="primary" onClick={handleClick}>
            markers
          </Button>
          <Button variant="contained" color="primary">
            split
          </Button>
        </div>
        {marker.map((element, id) => {
          return (
            <Marker latitude={element.latitude} longitude={element.longitude} key={id}>
              <div className="circle">
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
