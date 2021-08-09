import React, { useEffect, useState } from "react";
import Fieldset from "./Fieldset";

interface MentionProps {
  setMentions: React.Dispatch<React.SetStateAction<number>>;
}

function Mention({ setMentions }: MentionProps) {
  const [mentionValue, setMentionValue] = useState(0);

  const handleMentionValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMentionValue(parseInt(e.target.value));
  };

  useEffect(() => {
    setMentions(mentionValue);
  }, [mentionValue, setMentions]);

  return (
    <Fieldset title="Menção" oneLine={true}>
      <>
        <div className="option__mention choice">
          <span className="mention-value choice">
            {mentionValue === 0 ? `-` : mentionValue}
            {mentionValue >= 4 ? `+` : ``}
          </span>
          <input
            type="range"
            defaultValue={mentionValue}
            // value={mentionValue}
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
