import dynamic from "next/dynamic";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import Search from "../components/Form/Search/Search";
import { SchoolType } from "../types/SearchOptions";

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState<SchoolType[]>([]);
  const [loggedIn, setLoggedIn] = useState(false);

  //dynamic load the Map component in order for Leaflet to run properly
  const Map = dynamic(() => import("../components/Map/Map"), {
    ssr: false,
  });

  //check logged in status
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      Router.push("/");
    } else {
      setLoggedIn(true);
    }
  }, [loggedIn]);

  if (!loggedIn) return null;

  return (
    <div className="main">
      <Search setSearchResults={setSearchResults} />
      <Map searchResults={searchResults} />
    </div>
  );
}
