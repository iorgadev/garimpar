import dynamic from "next/dynamic";
import Head from "next/head";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import Search from "../components/Form/Search/Search";
import { SchoolType } from "../types/SearchOptions";

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState<SchoolType[]>([]);
  const [loggedIn, setLoggedIn] = useState(false);
  //search sidebar status
  const [hidden, setHidden] = useState(true);

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

  //don't load page without having a token set
  if (!loggedIn) return null;

  return (
    <div className="main">
      <Head>
        <title>Garimpar Filtros - Primeira Chance</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Search setSearchResults={setSearchResults} hideSidebar={hidden} />
      <Map searchResults={searchResults} />
      <div
        className="main__sidebarbutton"
        onClick={(e) => setHidden((hidden) => !hidden)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="search__header__icon"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        <span>Buscar</span>
      </div>
    </div>
  );
}
