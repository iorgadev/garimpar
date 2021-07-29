import dynamic from "next/dynamic";
import React, { useState } from "react";
import Search from "../components/Form/Search/Search";
import { SchoolType } from "../types/SearchOptions";

export default function Home() {
  const [searchResults, setSearchResults] = useState<SchoolType[]>([]);

  //dynamic load the Map component in order for Leaflet to run properly
  const Map = dynamic(() => import("../components/Map/Map"), {
    ssr: false,
  });

  return (
    <div className="main">
      <Search setSearchResults={setSearchResults} />
      <Map searchResults={searchResults} />
    </div>
  );
}
