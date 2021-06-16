import { Source, Layer } from "react-map-gl";

interface SrcLayer {
  id: any;
  data: any;
  layerData: any;
}

function SourceLayer({ id, data, layerData }: SrcLayer) {
  return (
    <Source id={id} type="geojson" data={data}>
      <Layer {...layerData} />
    </Source>
  );
}

export default SourceLayer;
