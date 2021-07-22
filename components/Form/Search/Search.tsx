import React, { useEffect, useState } from "react";
import Access from "../Access";
import Award from "../Award";
import Competition from "../Competition";
import Level from "../Level";
import Mention from "../Mention";
import State from "../State";
import YearRange from "../YearRange";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Icon from "../../Icons/Icon";
import { CompetitionType, LevelType } from "../../../types/SearchOptions";

interface SearchProps {
  setSearchCriteria?: React.Dispatch<React.SetStateAction<{}>>;
  setSearchResults: React.Dispatch<React.SetStateAction<{}>>;
}

function Search({ setSearchResults }: SearchProps) {
  const [competitionType, setCompetitionType] = useState<CompetitionType>(
    {} as CompetitionType
  );

  const [levels, setLevels] = useState<string[]>([]);

  const [awardTypes, setAwardTypes] = useState<string[]>([]);

  const [accessTypes, setAccessTypes] = useState<string[]>([]);

  //building query criteria to get results for map markers
  const searchCriteria = async () => {
    let criteria = {};

    criteria = {
      competitionType: competitionType,
      year: { start: 2008, end: 2021 },
      levels: levels.map((level) => level.split("-")[1]),
      awardTypes: awardTypes,
      accessTypes: accessTypes,
      ...searchCriteria,
    };

    // const searchData = await fetch("http://localhost:8080/schools");
    // const searchResults = await searchData.json();

    const schoolResults = await fetch(`http://localhost:8080/schools`, {
      method: "POST",
      mode: "cors",
      cache: "force-cache",
      body: JSON.stringify(criteria),
    });
    const { schools } = await schoolResults.json();

    // console.log(schools);
    setSearchResults(schools);
  };

  return (
    <div className="search">
      <Header />
      <SubHeader />

      <form>
        <Competition setCompetitionType={setCompetitionType} />
        <YearRange />
        <Mention />
        <Level competitionType={competitionType} setLevels={setLevels} />
        <Award setAwardTypes={setAwardTypes} />
        <Access setAccessTypes={setAccessTypes} />
        <State />

        <div className="submit">
          <input
            type="submit"
            name="search"
            value="Search Awards"
            onClick={(e) => {
              e.preventDefault();
              searchCriteria();
            }}
          />
        </div>
      </form>

      <span className="backto">
        <Icon title="Back" /> Back to Primeira Chance
      </span>
    </div>
  );
}

export default Search;
