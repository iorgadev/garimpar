import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Search from "../components/Form/Search/Search";
import { SchoolType } from "../types/SearchOptions";

export default function Home() {
  // const [searchCriteria, setSearchCriteria] = useState({});
  const [searchResults, setSearchResults] = useState<SchoolType[]>([
    {} as SchoolType,
  ]);

  useEffect(() => {
    // console.log(searchResults);
  }, [searchResults]);

  const Map = dynamic(() => import("../components/Map/Map"), {
    ssr: false,
  });

  return (
    <div className="main">
      {/* <Search setSearchCriteria={setSearchCriteria} /> */}
      <Search setSearchResults={setSearchResults} />
      <Map searchResults={searchResults} />
    </div>
  );
}
