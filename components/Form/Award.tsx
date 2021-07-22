import React, { ReactHTML, useEffect, useState } from "react";
import Icon from "../Icons/Icon";
import Fieldset from "./Fieldset";

interface AwardProps {
  setAwardTypes: React.Dispatch<React.SetStateAction<string[]>>;
}

function Award({ setAwardTypes }: AwardProps) {
  const [selectedAwards, setSelectedAwards] = useState<string[]>([]);

  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    // add element to selected awards, or remove if already selected
    if (!selectedAwards.includes(e.target.value))
      setSelectedAwards((awards) => [...awards, e.target.value]);
    else
      setSelectedAwards((awards) =>
        awards.filter((award) => award !== e.target.value)
      );
  };

  useEffect(() => {
    setAwardTypes(selectedAwards);
  }, [selectedAwards, setAwardTypes]);

  return (
    <Fieldset title="Award" oneLine={true}>
      <div className="option__award">
        <div
          className={`check-option medal choice ${
            selectedAwards.includes(`mention`) ? `checked` : ``
          }`}
        >
          <input
            type="checkbox"
            name="award"
            value="mention"
            onChange={(e) => handleCheckBox(e)}
          />
          <Icon title="Mention" />
          <span>MENCAO</span>
        </div>

        <div
          className={`check-option medal choice bronze ${
            selectedAwards.includes(`bronze`) ? `checked` : ``
          }`}
        >
          <input
            type="checkbox"
            name="award"
            value="bronze"
            onChange={(e) => handleCheckBox(e)}
          />
          <Icon title="Award" />
          <span>BRONZE</span>
        </div>

        <div
          className={`check-option medal choice silver ${
            selectedAwards.includes(`silver`) ? `checked` : ``
          }`}
        >
          <input
            type="checkbox"
            name="award"
            value="silver"
            onChange={(e) => handleCheckBox(e)}
          />
          <Icon title="Award" />
          <span>SILVER</span>
        </div>

        <div
          className={`check-option medal choice gold ${
            selectedAwards.includes(`gold`) ? `checked` : ``
          }`}
        >
          <input
            type="checkbox"
            name="award"
            value="gold"
            onChange={(e) => handleCheckBox(e)}
          />
          <Icon title="Award" />
          <span>GOLD</span>
        </div>
      </div>
    </Fieldset>
  );
}

export default Award;
