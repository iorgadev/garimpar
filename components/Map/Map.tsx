import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { SchoolType } from "../../types/SearchOptions";
import { useEffect, useState } from "react";

//Props Map receives from other components
interface MapProps {
  searchResults: SchoolType[];
}

function Map({ searchResults }: MapProps) {
  const [lat, setLat] = useState(-9.3438819);
  const [lon, setLon] = useState(-67.2983458);
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
                <p className="studentinfo__name">{school.studentname}</p>
                <p>{school.schoolname}</p>
                <p>
                  {school.city}, {school.statecode} {school.zipcode}
                </p>
                <br />
                <p>
                  <b>Mentions:</b> {school.mentions}
                </p>
                <p>
                  <b>Level:</b> {school.awardlevel}
                </p>
                <p>
                  <b>Type:</b> {school.awardtype}
                </p>
                <p>
                  <b>Year:</b> {school.awardyear}
                </p>
              </Popup>
            </Marker>
          );
        })
      : null;
  };

  useEffect(() => {
    if (searchResults.length > 0) {
      setLat(searchResults[0].lat);
      setLon(searchResults[0].lon);
    }
  }, [searchResults]);

  function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
  }

  //Map component being rendered to the page
  return (
    <MapContainer
      center={[lat, lon]}
      zoom={5}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="topright" />
      <ChangeMapView coords={[lat, lon]} />
      {resultMarkers(searchResults)}
    </MapContainer>
  );
}

export default Map;
