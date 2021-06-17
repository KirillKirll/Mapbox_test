import { GeoJSON } from "./types/types";

export const geojson: GeoJSON.Feature<GeoJSON.Geometry> = {
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

export const lineHorizontal: GeoJSON.Feature<GeoJSON.Geometry> = {
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

export const lineVertical: GeoJSON.Feature<GeoJSON.Geometry> = {
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
