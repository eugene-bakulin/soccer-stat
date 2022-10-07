import Leagues from "components/view/Leagues";
import SearchBar from "components/view/searchBar";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
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
        </Routes>
      </main>
    </div>
  );
}

export default App;
