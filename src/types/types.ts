export interface Viewport {
  latitude: number;
  longitude: number;
  width: string;
  height: string;
  zoom: number;
}

export interface MarkerTypes {
  latitude: any;
  longitude: any;
  index: number;
}

export interface GeoJSON {
  type: any;
  properties: object;
  geometry: any;
}

export interface LayerStyle {
  id: any;
  type: any;
  source: any;
  layout: object;
  paint: object;
}
