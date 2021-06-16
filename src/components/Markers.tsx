import { Marker } from "react-map-gl";
import { MarkerTypes } from "../types/types";

interface MarkerComponent {
  marker: any;
  isSquareSplitted: boolean;
}

function Markers({ marker, isSquareSplitted }: MarkerComponent) {
  const sectorColors = (el: any) => {
    if (isSquareSplitted) {
      if (el.longitude > 27.530389 && el.latitude > 53.904264) {
        return { background: "yellow" };
      }
      if (el.longitude > 27.530389 && el.latitude < 53.904264) {
        return { background: "blue" };
      }
      if (el.latitude > 53.904264) {
        return { background: "green" };
      }
      if (el.latitude < 53.904264) {
        return { background: "purple" };
      }
    } else return;
  };

  return (
    <>
      {marker.map((marker: MarkerTypes) => {
        return (
          <Marker latitude={marker.latitude} longitude={marker.longitude} key={marker.index}>
            <div className="circle" style={sectorColors(marker)}>
              <span>{marker.index}</span>
            </div>
          </Marker>
        );
      })}
    </>
  );
}

export default Markers;
