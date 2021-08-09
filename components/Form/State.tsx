import React, { useEffect, useState } from "react";
import { StateType } from "../../types/SearchOptions";
import Fieldset from "./Fieldset";

interface StateProps {
  setLocation: React.Dispatch<React.SetStateAction<number | null | undefined>>;
}

function State({ setLocation }: StateProps) {
  const [states, setStates] = useState<StateType[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/locations`)
      .then((result) => result.json())
      .then((data) => {
        setStates(data.locations);
      });
  }, []);

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(parseInt(e.target.value));
  };

  return (
    <Fieldset title="Estado" oneLine={true}>
      <div className="option__state">
        <select
          name="location"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handleLocationChange(e)
          }
        >
          <option value="">-</option>
          {states
            ? states.map((state) => {
                return (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                );
              })
            : null}
        </select>
      </div>
    </Fieldset>
  );
}

export default State;
