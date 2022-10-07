import React from "react";
import "../view/searchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <form className="search-form">
          <input
            id="search_field"
            className="search-field"
            type={"search"}
            name={"search"}
            placeholder={"поиск"}
            defaultValue={localStorage.search ? localStorage.search : ""}
          ></input>
          <div className="search-button-container">
            <input
              id="search_button"
              className="search-button"
              type={"submit"}
            ></input>
            <label className="search-button-label" htmlFor="search_button">
              <img src="search.svg" alt="search"></img>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
