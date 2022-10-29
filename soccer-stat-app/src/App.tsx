import Leagues from "components/view/leagues/Leagues";
import Matches from "components/view/matches/Matches";
import SearchBar from "components/view/search/searchBar";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { selectMatchId } from "./store/matchID/matchIdSlice";
import "./App.css";
import { selectPage } from "store/pagination/matchesPaginationSlice";
import Teams from "components/view/teams/Teams";
import { selectLoadingState, setLoading } from "store/loading/loadingSlice";
import LoadingSpinner from "components/view/loading/LoadingSpinner";
import { clearSearch, selectSearchState } from "store/search/searchSlice";
import {
  getLeagues,
  getTeams,
  respLeagues,
  respTeams,
} from "components/controller/fetch/FetchLogic";
import SearchPage from "components/view/search/searchPage";
import { selectModalState, setManyReqModal } from "store/modal/modalSlice";
import ManyReqModal from "components/view/modal/manyReqModal";
import { AxiosError } from "axios";
import DeniedModal from "components/view/modal/deniedModal";
import SoccerBallImg from "./components/view/app/assets/soccer_ball.svg";

function App() {
  const type = useAppSelector(selectMatchId).type;
  const id = useAppSelector(selectMatchId).id;
  const page = useAppSelector(selectPage).matchesPage;
  const teamName = useAppSelector(selectMatchId).teamName;
  const leagueName = useAppSelector(selectMatchId).leagueName;
  const loadingState = useAppSelector(selectLoadingState).isLoading;
  const search = useAppSelector(selectSearchState).search;
  const manyReqState = useAppSelector(selectModalState).manyReqModalDisplay;
  const deniedModalState = useAppSelector(selectModalState).deniedModalDisplay;
  const dispatch = useAppDispatch();
  const location = useLocation();

  const [leaguesIsLoaded, setLeagues] = useState<respLeagues | null>(null);
  const [teamsIsLoaded, setTeams] = useState<respTeams | null>(null);

  const idForMatchDisplay = localStorage.getItem("idForMatchDisplay");
  const typeForMatchDisplay = localStorage.getItem("typeForMatchDisplay") as
    | "league"
    | "team"
    | null;
  const nameForMatchDisplay = localStorage.getItem("nameForMatchDisplay");
  const userSearchLS = localStorage.getItem("userSearch");

  const refHandler = () => {
    dispatch(clearSearch());
    localStorage.removeItem("userSearch");
  };

  useEffect(() => {
    (async () => {
      dispatch(setLoading(true));
      try {
        const leaguesData = await getLeagues();
        const teamsData = await getTeams();
        if (leaguesData) {
          setLeagues(leaguesData);
        }
        if (teamsData) {
          setTeams(teamsData);
        }
      } catch (e) {
        const err = e as AxiosError;
        if (err.response?.status === 429) {
          dispatch(setManyReqModal());
        }
      } finally {
        dispatch(setLoading(false));
      }
    })();
  }, [dispatch]);
  return (
    <div className="App">
      {loadingState && <LoadingSpinner />}
      {manyReqState && <ManyReqModal />}
      {deniedModalState && <DeniedModal />}
      <header className="header-container">
        <div className="header-logo">
          <img src={SoccerBallImg} alt="soccer ball"></img>
        </div>
        <div className="header-leagues">
          <Link
            className={`header-link ${
              (location.pathname === "/soccer-stat/leagues" ||
                location.pathname === "/soccer-stat/") &&
              "active-link"
            }`}
            to="/soccer-stat/leagues"
            onClick={refHandler}
          >
            Лиги
          </Link>
        </div>
        <div className="header-teams">
          <Link
            className={`header-link ${
              location.pathname === "/soccer-stat/teams" && "active-link"
            }`}
            to="/soccer-stat/teams"
            onClick={refHandler}
          >
            Команды
          </Link>
        </div>
        <SearchBar />
      </header>
      <main>
        <Routes>
          <Route
            path="/soccer-stat/*"
            element={<Leagues leaguesData={leaguesIsLoaded} />}
          ></Route>
          <Route
            path="/soccer-stat/teams"
            element={<Teams teamsData={teamsIsLoaded} />}
          ></Route>
          <Route
            path="/soccer-stat/matches"
            element={
              <Matches
                search={search ? search : userSearchLS ? userSearchLS : null}
                teamName={
                  teamName
                    ? teamName
                    : nameForMatchDisplay
                    ? nameForMatchDisplay
                    : null
                }
                leagueName={
                  leagueName
                    ? leagueName
                    : nameForMatchDisplay
                    ? nameForMatchDisplay
                    : null
                }
                type={
                  type ? type : typeForMatchDisplay ? typeForMatchDisplay : null
                }
                id={id ? id : idForMatchDisplay ? +idForMatchDisplay : null}
                page={page}
              />
            }
          ></Route>
          <Route
            path="/soccer-stat/search"
            element={
              <SearchPage
                leaguesData={leaguesIsLoaded}
                teamsData={teamsIsLoaded}
                search={search ? search : userSearchLS ? userSearchLS : null}
              />
            }
          ></Route>
        </Routes>
      </main>
      {loadingState ||
      manyReqState ||
      deniedModalState ||
      !leaguesIsLoaded ||
      !teamsIsLoaded ? null : (
        <footer className="footer">
          <div className="footer-info">
            <a
              href="https://eugene-bakulin.github.io/cv/build/"
              target={"_blank"}
              rel="noreferrer"
            >
              Eugene Bakulin, 2022
            </a>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;
