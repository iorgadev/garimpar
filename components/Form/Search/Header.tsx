import React from "react";

interface HeaderProps {
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ hidden, setHidden }: HeaderProps) {
  return (
    <div className="search__header">
      <div
        className={`search__header__showsidebar ${hidden ? `` : `hidden`}`}
        onClick={() => setHidden((hidden) => !hidden)}
      >
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
        <span>Search</span>
      </div>
      {/* <svg
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
      </svg> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="search__header__icon"
        style={{ cursor: `initial` }}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>

      <h1>School Award Search</h1>

      <div className="search__header__right">
        {/* <svg
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
        </svg> */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="search__header__icon closebtn"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => setHidden((hidden) => !hidden)}
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default Header;
