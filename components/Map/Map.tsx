import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

interface MapProps {
  searchResults: SchoolType[];
}

interface SchoolType {
  lat: number;
  lon: number;
  name: string;
}

function Map({ searchResults }: MapProps) {
  //the current pin for each school result
  // - can be customized to include other colors, sizes, etc
  var mapPin = L.icon({
    iconUrl: "/images/pin3.png",
    iconSize: [40, 40],
  });

  const schoolResults = (results: SchoolType[]) => {
    return results.length > 0
      ? results.map((school, index) => {
          return (
            <Marker
              key={index}
              position={[school.lat, school.lon]}
              icon={mapPin}
            >
              <Popup>{school.name}</Popup>
            </Marker>
          );
        })
      : null;
  };

  //update map results after search complete
  useEffect(() => {
    if (searchResults.length > 0) console.log("update map here");
  }, [searchResults]);

  return (
    <MapContainer
      center={[-9.3438819, -57.2983458]}
      zoom={6}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="topright" />
      {schoolResults(searchResults)}
    </MapContainer>
  );
}

export default Map;
