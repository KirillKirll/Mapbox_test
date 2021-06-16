import { LayerStyle } from "../types/types";

export const layerBorder: LayerStyle = {
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

export const layerHorizontal: LayerStyle = {
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

export const layerVertical: LayerStyle = {
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
