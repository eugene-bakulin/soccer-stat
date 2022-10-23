import Leagues from "components/view/leagues/Leagues";
import Matches from "components/view/matches/Matches";
import SearchBar from "components/view/search/searchBar";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { selectMatchId } from "./store/matchID/matchIdSlice";
import "./App.css";
import { selectPage } from "store/pagination/matchesPaginationSlice";
import Teams from "components/view/teams/Teams";
import { selectLoadingState } from "store/loading/loadingSlice";
import LoadingSpinner from "components/view/loading/LoadingSpinner";
import { clearSearch, selectSearchState } from "store/search/searchSlice";

function App() {
  const type = useAppSelector(selectMatchId).type;
  const id = useAppSelector(selectMatchId).id;
  const page = useAppSelector(selectPage).matchesPage;
  const name = useAppSelector(selectMatchId).teamName;
  const loadingState = useAppSelector(selectLoadingState).isLoading;
  const search = useAppSelector(selectSearchState).search;
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      {loadingState && <LoadingSpinner />}
      <header className="header-container">
        <div className="header-logo">
          <img src="soccer_ball.svg" alt="soccer ball"></img>
        </div>
        <div className="header-leagues">
          <Link
            className="header-link"
            onClick={() => dispatch(clearSearch())}
            to="/leagues"
          >
            Лиги
          </Link>
        </div>
        <div className="header-teams">
          <Link
            className="header-link"
            onClick={() => dispatch(clearSearch())}
            to="/teams"
          >
            Команды
          </Link>
        </div>
        <SearchBar />
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<Leagues search={search} />}></Route>
          <Route path="/teams" element={<Teams search={search} />}></Route>
          <Route
            path="/matches"
            element={
              <Matches teamName={name} type={type} id={id} page={page} />
            }
          ></Route>
        </Routes>
      </main>
      {loadingState ? null : <footer className="footer"></footer>}
    </div>
  );
}

export default App;
