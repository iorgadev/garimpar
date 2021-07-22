import React, { useState } from "react";
import Fieldset from "./Fieldset";

function Mention() {
  const [mentionValue, setMentionValue] = useState(0);

  const handleMentionValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMentionValue(parseInt(e.target.value));
  };

  return (
    <Fieldset title="Mentions" oneLine={true}>
      <>
        <span className="mention-value choice">
          {mentionValue === 0 ? `-` : mentionValue}
          {mentionValue >= 4 ? `+` : ``}
        </span>
        <div className="option__mention choice">
          <input
            type="range"
            value={mentionValue}
            min={0}
            max={4}
            step={1}
            onChange={(e) => handleMentionValueChange(e)}
          />
        </div>
      </>
    </Fieldset>
  );
}

export default Mention;
