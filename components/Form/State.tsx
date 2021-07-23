import React, { useEffect, useState } from "react";
import Fieldset from "./Fieldset";

interface StateType {
  id: number;
  name: string;
}

function State({ setLocation }) {
  const [states, setStates] = useState<StateType[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/locations`)
      .then((result) => result.json())
      .then((data) => {
        setStates(data.locations);
      });
  }, []);

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(parseInt(e.target.value));
  };

  return (
    <Fieldset title="State" oneLine={true}>
      <div className="option__state">
        <select onChange={(e) => handleLocationChange(e)}>
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
