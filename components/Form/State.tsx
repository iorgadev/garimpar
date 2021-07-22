import React, { useEffect, useState } from "react";
import Fieldset from "./Fieldset";

interface StateType {
  name: string;
}

function State() {
  const [states, setStates] = useState<StateType[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/locations`)
      .then((result) => result.json())
      .then((data) => {
        setStates(data.locations);
      });
  }, []);

  return (
    <Fieldset title="State" oneLine={true}>
      <div className="option__state">
        <select>
          <option value="all">Any</option>
          {states
            ? states.map((state) => {
                return (
                  <option key={state.name} value={state.name}>
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
