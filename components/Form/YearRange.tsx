import React, { useEffect, useState } from "react";
import Fieldset from "./Fieldset";

interface YearRangeProps {
  setStartDate: React.Dispatch<React.SetStateAction<number>>;
  setEndDate: React.Dispatch<React.SetStateAction<number>>;
}

function YearRange({ setStartDate, setEndDate }: YearRangeProps) {
  // const year = new Date().getFullYear();
  const startYear = 2008;
  const endYear = new Date().getFullYear();
  // const [startYear, setStartYear] = useState(2008);
  // const [endYear, setEndYear] = useState(year);
  const [currentStartYear, setCurrentStartYear] = useState(startYear);
  const [currentEndYear, setCurrentEndYear] = useState(endYear);

  const yearSelectOptions = (type = "start") => {
    const start = () => type === "start";

    const disabled = (value: number) =>
      start() ? value > currentEndYear : value < currentStartYear;

    let yearOptions = [];
    for (let i = startYear; i <= endYear; i++) {
      yearOptions.push(
        <option value={i} key={i} disabled={disabled(i)}>
          {i}
        </option>
      );
    }
    return yearOptions;
  };

  useEffect(() => {
    if (currentStartYear > currentEndYear)
      setCurrentStartYear(currentStartYear);
    setStartDate(currentStartYear);
  }, [currentStartYear]);
  useEffect(() => {
    if (currentEndYear < currentStartYear) setCurrentEndYear(currentEndYear);
    setEndDate(currentEndYear);
  }, [currentEndYear]);

  return (
    <Fieldset title="Year" oneLine={true}>
      <div className="option__year">
        <div className="option__year__to choice">
          From:
          <select
            name="startYear"
            onChange={(e) => setCurrentStartYear(parseInt(e.target.value))}
          >
            {yearSelectOptions()}
          </select>
        </div>
        <div className="option__year__from choice">
          To:
          <select
            name="endYear"
            defaultValue={endYear}
            onChange={(e) => setCurrentEndYear(parseInt(e.target.value))}
          >
            {yearSelectOptions("end")}
          </select>
        </div>
      </div>
    </Fieldset>
  );
}

export default YearRange;
