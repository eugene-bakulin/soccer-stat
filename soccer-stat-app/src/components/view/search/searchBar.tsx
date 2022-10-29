import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  clearSearch,
  selectSearchState,
  setSearch,
} from "store/search/searchSlice";
import { useLocation, useNavigate } from "react-router-dom";
import "../search/searchBar.css";
import SearchImg from "../app/assets/search.png";

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useNavigate();
  const location = useLocation();
  const search = useAppSelector(selectSearchState).search;
  const userSearchLS = localStorage.getItem("userSearch");
  useEffect(() => {
    const searchField = document.getElementById(
      "search_field"
    ) as HTMLInputElement;
    const button = document.getElementById("search_button") as HTMLInputElement;

    if (searchField) {
      if (button) {
        button.addEventListener("click", () => {
          if (searchField.value && searchField.value.trim() !== "") {
            if (window.location.href !== "http://localhost:3000/matches") {
              history("/search");
            }
            dispatch(setSearch(searchField.value.trim()));
            localStorage.setItem("userSearch", searchField.value.trim());
          }
        });
      }
      searchField.addEventListener("search", () => {
        if (window.location.href !== "http://localhost:3000/matches") {
          history("/");
        }
        dispatch(clearSearch());
        localStorage.removeItem("userSearch");
      });
    }
  }, [dispatch, history, location.pathname]);
  return (
    <div className="search-bar">
      <form
        className={`search-form ${search || userSearchLS ? "highlighted" : ""}`}
      >
        <input
          id="search_field"
          className="search-field"
          type={"search"}
          name={"search"}
          placeholder={
            location.pathname === "/matches"
              ? "поиск по матчам"
              : "поиск по лигам и командам"
          }
          defaultValue={search ? search : userSearchLS ? userSearchLS : ""}
          autoComplete="off"
        ></input>
        <div className="search-button-container">
          <input
            id="search_button"
            className="search-button"
            type={"button"}
          ></input>
          <label className="search-button-label" htmlFor="search_button">
            <img src={SearchImg} alt="search"></img>
          </label>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
