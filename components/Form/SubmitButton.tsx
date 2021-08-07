import React from "react";

interface SearchButtonProps {
  searchCriteria: () => Promise<void>;
}

function SubmitButton({ searchCriteria }: SearchButtonProps) {
  return (
    <div className="submit">
      <input
        type="button"
        name="search"
        value="Search Awards"
        onClick={searchCriteria}
      />
    </div>
  );
}

export default SubmitButton;
