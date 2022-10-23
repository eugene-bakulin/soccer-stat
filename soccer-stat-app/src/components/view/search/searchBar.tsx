import React, { useEffect, useState } from "react";
import { useAppDispatch } from "store/hooks";
import { clearSearch, setSearch } from "store/search/searchSlice";
import "../search/searchBar.css";

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchLocal, setLocalSearch] = useState<string | null>(null);
  useEffect(() => {
    const button = document.querySelector(".search-button");
    const searchField = document.getElementById(
      "search_field"
    ) as HTMLInputElement;

    if (button) {
      button.addEventListener("click", () => {
        if (searchField) {
          dispatch(setSearch(searchField.value));
          setLocalSearch(searchField.value);
        }
      });
    }
    if (searchField) {
      searchField.addEventListener("search", () => {
        dispatch(clearSearch());
        setLocalSearch(null);
      });
    }
  }, [dispatch]);
  return (
    <div className="search-bar">
      <form className="search-form">
        <input
          id="search_field"
          className="search-field"
          type={"search"}
          name={"search"}
          placeholder={"поиск"}
          defaultValue={searchLocal ? searchLocal : ""}
        ></input>
        <div className="search-button-container">
          <input
            id="search_button"
            className="search-button"
            type={"button"}
          ></input>
          <label className="search-button-label" htmlFor="search_button">
            <img src="search.svg" alt="search"></img>
          </label>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
