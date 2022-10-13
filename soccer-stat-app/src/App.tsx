import Leagues from "components/view/Leagues";
import Matches from "components/view/Matches";
import SearchBar from "components/view/searchBar";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./store/hooks";
import { selectMatchId } from "./store/matchID/matchIdSlice";
import "./App.css";
import { selectMatchesPage } from "store/pagination/matchesPaginationSlice";

function App() {
  const id = useAppSelector(selectMatchId).id;
  const page = useAppSelector(selectMatchesPage).page;
  return (
    <div className="App">
      <header className="header-container">
        <div className="header-logo">
          <img src="soccer_ball.svg" alt="soccer ball"></img>
        </div>
        <div className="header-leagues">
          <Link className="header-link" to="/leagues">
            Лиги
          </Link>
        </div>
        <div className="header-teams">
          <Link className="header-link" to="/teams">
            Команды
          </Link>
        </div>
        <SearchBar />
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<Leagues />}></Route>
          <Route
            path="/matches"
            element={<Matches id={id} page={page} />}
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
