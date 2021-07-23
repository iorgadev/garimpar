import React, { useEffect, useState } from "react";
import { CompetitionType, LevelType } from "../../types/SearchOptions";
import Fieldset from "./Fieldset";

interface LevelProps {
  competitionType: CompetitionType;
  setLevels: React.Dispatch<React.SetStateAction<string[]>>;
}

function Level({ competitionType, setLevels }: LevelProps) {
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);

  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    // add element to selected levels, or remove if already selected
    if (!selectedLevels.includes(e.target.value))
      setSelectedLevels((levels) => [...levels, e.target.value]);
    else
      setSelectedLevels((levels) =>
        levels.filter((level) => level !== e.target.value)
      );
  };

  // reset selectedLevels if Competition type has been changed
  // only if it's not already empty
  useEffect(() => {
    setSelectedLevels((selectedLevels) =>
      selectedLevels.length > 0 ? [] : selectedLevels
    );
  }, [competitionType]);

  // do something if a level has been selected or removed
  useEffect(() => {
    setLevels(selectedLevels);
  }, [selectedLevels, setLevels]);

  const levelTypes = [
    ["1o", "2o", "3o", "9o"],
    ["1o", "2o", "3o", "8o", "9o"],
    ["N1", "N2", "N3"],
    ["N1", "N2", "N3"],
    ["I1", "I2", "P1", "P2", "P3"],
  ];

  return (
    <Fieldset title="Level" oneLine={true}>
      <div className="option__level">
        {levelTypes[competitionType.id >= 1 ? competitionType.id - 1 : 0].map(
          (level) => {
            return (
              <div
                key={level}
                className={`check-option choice ${
                  selectedLevels.includes(`${competitionType.name}-${level}`)
                    ? `checked`
                    : ``
                }`}
              >
                <input
                  type="checkbox"
                  name="level"
                  value={`${competitionType.name}-${level}`}
                  onChange={(e) => handleCheckBox(e)}
                />
                <span>{level}</span>
              </div>
            );
          }
        )}
      </div>
    </Fieldset>
  );
}

export default Level;
