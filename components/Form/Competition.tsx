import { useEffect, useState } from "react";
import { CompetitionType } from "../../types/SearchOptions";
import Fieldset from "./Fieldset";

interface CompetitionProps {
  setCompetitionType: React.Dispatch<React.SetStateAction<CompetitionType>>;
}

function Competition({ setCompetitionType }: CompetitionProps) {
  const [competitionTypes, setCompetitionTypes] = useState([]);
  const [selectedType, setSelectedType] = useState<number>(1);

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(parseInt(e.target.value));
    setCompetitionType(competitionTypes[parseInt(e.target.value) - 1]);
  };

  useEffect(() => {
    //make an API call to get all possible Competition Types from database
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/competition-types`)
      .then((result) => result.json())
      .then((data) => {
        setCompetitionTypes(data.competitions);
        setCompetitionType(data.competitions[0]);
      })
      .catch((err) => {
        console.log("Error connecting to API.");
      });
  }, [setCompetitionType]);

  return (
    <Fieldset title="Competição">
      <div className="option__competition">
        {competitionTypes
          ? competitionTypes.map((type: CompetitionType) => {
              return (
                <div
                  key={type.id}
                  className={`radio-option choice ${
                    selectedType === type.id ? `checked` : ``
                  }`}
                >
                  <input
                    name="competitionID"
                    type="radio"
                    value={type.id}
                    onChange={(e) => handleTypeChange(e)}
                  />
                  <span>{type.name}</span>
                </div>
              );
            })
          : null}
      </div>
    </Fieldset>
  );
}

export default Competition;
