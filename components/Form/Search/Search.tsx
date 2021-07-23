import React, { useEffect, useRef, useState } from "react";
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

  const [startDate, setStartDate] = useState(2008);
  const [endDate, setEndDate] = useState(new Date().getFullYear());

  const [location, setLocation] = useState<number | null>();

  const form = useRef<HTMLFormElement>();

  const search = async (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    const schoolResults = await fetch(`http://localhost:8080/schools`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: data,
    });
    const schools = await schoolResults.json();
    // console.log(schools);
    console.log(data);
  };

  //building query criteria to get results for map markers
  const searchCriteria = async () => {
    let criteria = {};

    criteria = {
      competitionID: competitionType.id,
      year: { start: startDate, end: endDate },
      levels: levels.map((level) => level.split("-")[1]),
      awardTypes: awardTypes,
      accessTypes: accessTypes,
      location: location,
      ...searchCriteria,
    };

    // const searchData = await fetch("http://localhost:8080/schools");
    // const searchResults = await searchData.json();

    const schoolResults = await fetch(`http://localhost:8080/schools`, {
      method: "POST",
      mode: "cors",
      // cache: "no-cache",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(criteria),
    });
    const schools = await schoolResults.json();

    console.log(schools);
    setSearchResults(schools);
  };

  return (
    <div className="search">
      <Header />
      <SubHeader />

      <form>
        <Competition setCompetitionType={setCompetitionType} />
        <YearRange setStartDate={setStartDate} setEndDate={setEndDate} />
        <Mention />
        <Level competitionType={competitionType} setLevels={setLevels} />
        <Award setAwardTypes={setAwardTypes} />
        <Access setAccessTypes={setAccessTypes} />
        <State setLocation={setLocation} />

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
