import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { SchoolType } from "../../types/SearchOptions";

//Props Map receives from other components
interface MapProps {
  searchResults: SchoolType[];
}

function Map({ searchResults }: MapProps) {
  //the current pin for each school result
  // - can be customized to include other colors, sizes, etc
  var mapPin = L.icon({
    iconUrl: "/images/pin3.png",
    iconSize: [40, 40],
  });

  //function to create each individual marker on the map
  const resultMarkers = (results: SchoolType[]) => {
    return results.length > 0
      ? results.map((school, index) => {
          return (
            <Marker
              key={index}
              position={[school.lat, school.lon]}
              icon={mapPin}
            >
              <Popup>
                <p>Student: {school.studentname}</p>
                <p>Student ID: {school.studentid}</p>
                <p>Mentions: {school.mentions}</p>
                <p>School: {school.schoolname}</p>
                <p>City: {school.city}</p>
                <br />
                <p>Award Level: {school.awardlevel}</p>
                <p>Award Type: {school.awardtype}</p>
                <p>Award Year: {school.awardyear}</p>
              </Popup>
            </Marker>
          );
        })
      : null;
  };

  //Map component being rendered to the page
  return (
    <MapContainer
      center={[-9.3438819, -67.2983458]}
      zoom={5}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="topright" />
      {resultMarkers(searchResults)}
    </MapContainer>
  );
}

export default Map;
