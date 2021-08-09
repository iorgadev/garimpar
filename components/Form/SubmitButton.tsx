import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

interface SearchButtonProps {
  searchCriteria: () => Promise<void>;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}

function SubmitButton({
  searchCriteria,
  setHidden,
  loading,
}: SearchButtonProps) {
  const { height, width } = useWindowDimensions();

  const handleSearchButton = () => {
    searchCriteria();
    //hide sidebar on small devices
    if (width <= 600) setHidden(true);
  };

  return (
    <div className="submit" onClick={handleSearchButton}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="search__header__icon"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>
      <input
        type="button"
        name="search"
        disabled={loading}
        value={!loading ? `Buscar` : `Carregando...`}
      />
    </div>
  );
}

export default SubmitButton;
