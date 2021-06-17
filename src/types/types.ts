export interface Viewport {
  latitude: number;
  longitude: number;
  width: string;
  height: string;
  zoom: number;
}

export interface MarkerTypes {
  latitude: number;
  longitude: number;
  index: number;
  map?: (marker: object) => void;
}

export interface GeoJSON {
  type: string;
  properties?: object;
  geometry: object;
}

export interface LayerStyle {
  id: string;
  type: string;
  source: string;
  layout: object;
  paint: object;
}
