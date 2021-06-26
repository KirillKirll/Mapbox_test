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
  type: "Feature";
  properties?: object;
  geometry: {};
}

export interface LayerStyle {
  id: string;
  type: "line";
  source: string;
  layout: object;
  paint: object;
}

export interface ButtonsTypes {
  setIsSquareSplitted(isSquareSplitted: boolean): void;
  setMarker(markers: object): void;
}

export interface MarkerComponent {
  markers: MarkerTypes[];
  isSquareSplitted: boolean;
}
