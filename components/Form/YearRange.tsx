import React, { useEffect, useState } from "react";
import Fieldset from "./Fieldset";

interface YearRangeProps {
  setStartDate: React.Dispatch<React.SetStateAction<number>>;
  setEndDate: React.Dispatch<React.SetStateAction<number>>;
}

function YearRange({ setStartDate, setEndDate }: YearRangeProps) {
  const startYear = 2008;
  const endYear = new Date().getFullYear();
  const [currentStartYear, setCurrentStartYear] = useState(startYear);
  const [currentEndYear, setCurrentEndYear] = useState(endYear);

  const yearSelectOptions = (type = "start") => {
    //from (start) - to (end) year selectable options
    const isStart = () => type === "start";

    //check if year range should be disabled based on user selection
    //ex: if start date is 2012, Year END can not be less than 2012
    const disabled = (value: number) =>
      isStart() ? value > currentEndYear : value < currentStartYear;

    //create selectable years for form fields (Start / End years)
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
    setStartDate(currentStartYear);
  }, [setStartDate, currentStartYear]);
  useEffect(() => {
    setEndDate(currentEndYear);
  }, [setEndDate, currentEndYear]);

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
