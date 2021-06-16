import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const getRandomCoordinate = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const DEFAULT = {
  latitude: 53.902334,
  longitude: 27.5618791,
  width: "100vw",
  height: "100vh",
  zoom: 12,
};

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(2),
      },
    },
  }),
);
