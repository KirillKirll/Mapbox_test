import Button from "@material-ui/core/Button";
import { MarkerTypes, ButtonsTypes } from "../types/types";
import { getRandomCoordinate, useStyles } from "../utils/utils";

function Buttons({ setIsSquareSplitted, setMarker }: ButtonsTypes) {
  const classes = useStyles();

  const handleMarkers = () => {
    for (let i = 0; i < 40; i++) {
      const dots: MarkerTypes = {
        latitude: getRandomCoordinate(53.859167, 53.949264),
        longitude: getRandomCoordinate(27.452036, 27.594389),
        index: i + 1,
      };

      setMarker((markers: MarkerTypes[]) => [...markers, dots]);
    }
  };

  const handleSplitBorders = () => {
    setIsSquareSplitted(true);
  };

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={handleMarkers}>
        markers
      </Button>
      <Button variant="contained" color="primary" onClick={handleSplitBorders}>
        split
      </Button>
    </div>
  );
}

export default Buttons;
