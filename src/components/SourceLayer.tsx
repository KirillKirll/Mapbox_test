import { Source, Layer } from "react-map-gl";
import { LayerStyle } from "../types/types";

interface SrcLayer {
  id: string;
  data: GeoJSON.Feature<GeoJSON.Geometry>;
  layerData: LayerStyle;
}

function SourceLayer({ id, data, layerData }: SrcLayer) {
  return (
    <Source id={id} type="geojson" data={data}>
      <Layer {...layerData} />
    </Source>
  );
}

export default SourceLayer;
