import React from "react";
import "./SearchHeader.scss";

const SearchHeader = ({ title, buttonTitle, buttonLink }) => {
  return (
    <div className="search-header">
      <h1 className="search-header__title">{title}</h1>
      <div className="search-header__controls">
        <input
          type="text"
          placeholder="Search..."
          className="search-header__input"
          disabled
        />
        <a href={buttonLink} className="search-header__button">
          {buttonTitle}
        </a>
      </div>
    </div>
  );
};

export default SearchHeader;
