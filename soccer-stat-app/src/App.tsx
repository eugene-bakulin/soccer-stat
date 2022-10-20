import Leagues from "components/view/leagues/Leagues";
import Matches from "components/view/matches/Matches";
import SearchBar from "components/view/search/searchBar";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./store/hooks";
import { selectMatchId } from "./store/matchID/matchIdSlice";
import "./App.css";
import { selectPage } from "store/pagination/matchesPaginationSlice";
import Teams from "components/view/teams/Teams";

function App() {
  const type = useAppSelector(selectMatchId).type;
  const id = useAppSelector(selectMatchId).id;
  const page = useAppSelector(selectPage).matchesPage;
  const name = useAppSelector(selectMatchId).teamName;
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
          <Route path="/teams" element={<Teams />}></Route>
          <Route
            path="/matches"
            element={
              <Matches teamName={name} type={type} id={id} page={page} />
            }
          ></Route>
        </Routes>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
