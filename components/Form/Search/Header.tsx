import React from "react";

interface HeaderProps {
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ setHidden }: HeaderProps) {
  return (
    <div className="search__header">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="search__header__icon"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>

      <h1>School Award Search</h1>

      <div className="search__header__right">
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

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="search__header__icon"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => setHidden((hidden) => !hidden)}
        >
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </div>
    </div>
  );
}

export default Header;
