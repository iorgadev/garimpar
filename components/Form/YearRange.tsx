import React from "react";
import Fieldset from "./Fieldset";

function YearRange() {
  return (
    <Fieldset title="Year" oneLine={true}>
      <div className="option__year">
        <div className="option__year__to choice">
          From:
          <select>
            <option value="2008">2008</option>
          </select>
        </div>
        <div className="option__year__from choice">
          To:
          <select>
            <option value="2021">2021</option>
          </select>
        </div>
      </div>
    </Fieldset>
  );
}

export default YearRange;
