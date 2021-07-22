import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

interface MapProps {
  searchResults: SchoolType[];
}

interface SchoolType {
  lat: number;
  lon: number;
}

function Map({ searchResults }: MapProps) {
  // const [results, setResults] = useState<SchoolType[]>(searchResults);

  //the current pin for each school result
  // - can be customized to include other colors, sizes, etc
  var mapPin = L.icon({
    iconUrl: "/images/pin3.png",
    iconSize: [40, 40],
  });

  const schoolResults = (searchResults: SchoolType[]) => {
    return searchResults.length > 0
      ? searchResults.map((school, index) => {
          return (
            <Marker
              key={index}
              position={[school.lat, school.lon]}
              icon={mapPin}
            ></Marker>
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
      zoom={5}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {schoolResults(searchResults)}
      <Marker position={[-9.9643468, -67.8471758]} icon={mapPin}>
        <Popup>
          School name
          <br />
          goes here
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
