import React, { useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";
import { CompetitionType, SchoolType } from "../../../types/SearchOptions";
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
import SubmitButton from "../SubmitButton";

interface SearchProps {
  setSearchResults: React.Dispatch<React.SetStateAction<SchoolType[]>>;
  hideSidebar: boolean;
  // setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

function Search({ setSearchResults, hideSidebar }: SearchProps) {
  //search sidebar status
  const [hidden, setHidden] = useState(false);

  //all search settings state
  const [competitionType, setCompetitionType] = useState<CompetitionType>(
    {} as CompetitionType
  );
  const [levels, setLevels] = useState<string[]>([]);
  const [mentions, setMentions] = useState(0);
  const [awardTypes, setAwardTypes] = useState<string[]>([]);
  const [accessTypes, setAccessTypes] = useState<string[]>([]);
  const [startDate, setStartDate] = useState(2008);
  const [endDate, setEndDate] = useState(new Date().getFullYear());
  const [location, setLocation] = useState<number | null>();

  //building query criteria from search settings to make API call
  const searchCriteria = async () => {
    let criteria = {};

    criteria = {
      competitionID: competitionType.id,
      year: { start: startDate, end: endDate },
      mentions: mentions,
      levels: levels.map((level) => level.split("-")[1]),
      awardTypes: awardTypes,
      accessTypes: accessTypes,
      location: location,
    };

    //if no token found, redirect to login page
    if (!localStorage.getItem("token")) {
      Router.push("/");
    }

    //make API call using the criteria generated above
    const studentResults = await fetch(`http://localhost:8080/students`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(criteria),
    });
    const students = await studentResults.json();

    //if api calls succeeds and returns results
    if (studentResults.status === 200) setSearchResults(students);
  };

  useEffect(() => {
    setHidden(false);
  }, [hideSidebar]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    Router.push("/");
  };

  return (
    <div className={`search ${hidden ? `hidden` : ``}`}>
      <Header hidden={hidden} setHidden={setHidden} />
      <SubHeader />

      <form>
        <Competition setCompetitionType={setCompetitionType} />
        <YearRange setStartDate={setStartDate} setEndDate={setEndDate} />
        <Mention setMentions={setMentions} />
        <Level competitionType={competitionType} setLevels={setLevels} />
        <Award setAwardTypes={setAwardTypes} />
        <Access setAccessTypes={setAccessTypes} />
        <State setLocation={setLocation} />
        <SubmitButton searchCriteria={searchCriteria} setHidden={setHidden} />
      </form>

      <div className="bottomlinks">
        <Link href="http://www.primeirachance.org">
          <a>
            <div>
              <Icon title="Back" />
              <span>Back to Primeira Chance</span>
            </div>
          </a>
        </Link>
        <div onClick={handleLogout} className="bottomlinks__logout">
          <Icon title="Logout" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
