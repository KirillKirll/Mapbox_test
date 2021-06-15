import React from "react";
import "./App.css";
import Map from "react-map-gl";
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(2),
      },
    },
  }),
);

function App() {
  const classes = useStyles();

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
        onViewportChange={(viewport: any) => setViewport(viewport)}>
        <div className={classes.root}>
          <Button variant="contained" color="primary">
            markers
          </Button>
          <Button variant="contained" color="primary">
            split
          </Button>
        </div>
      </Map>
    </div>
  );
}

export default App;
