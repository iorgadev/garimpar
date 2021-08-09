import React, { useEffect, useState } from "react";
import Fieldset from "./Fieldset";

interface AccessProps {
  setAccessTypes: React.Dispatch<React.SetStateAction<string[]>>;
}

function Access({ setAccessTypes }: AccessProps) {
  const [selectedAccess, setSelectedAccess] = useState<string[]>([]);

  // handle when checkboxes are checked/unchecked
  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    // add element to selected awards state, or remove if already selected
    if (!selectedAccess.includes(e.target.value))
      setSelectedAccess((access) => [...access, e.target.value]);
    else
      setSelectedAccess((access) =>
        access.filter((type) => type !== e.target.value)
      );
  };

  useEffect(() => {
    setAccessTypes(selectedAccess);
  }, [selectedAccess, setAccessTypes]);

  return (
    <Fieldset title="Escola" oneLine={true}>
      <div className="option__level">
        <div
          className={`check-option choice ${
            selectedAccess.includes(`public`) ? `checked` : ``
          }`}
        >
          <input
            type="checkbox"
            name="access"
            value="public"
            onChange={(e) => handleCheckBox(e)}
          />
          <span>Pública</span>
        </div>

        <div
          className={`check-option choice ${
            selectedAccess.includes(`private`) ? `checked` : ``
          }`}
        >
          <input
            type="checkbox"
            name="access"
            value="private"
            onChange={(e) => handleCheckBox(e)}
          />
          <span>Privada</span>
        </div>
      </div>
    </Fieldset>
  );
}

export default Access;
