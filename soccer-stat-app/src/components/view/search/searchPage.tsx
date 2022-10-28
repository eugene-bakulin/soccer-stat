import { respLeagues, respTeams } from "components/controller/fetch/FetchLogic";
import React from "react";
import LeagueCard from "../leagues/LeagueCard";
import TeamCard from "../teams/TeamCard";
import "./searchPage.css";

const SearchPage: React.FC<{
  leaguesData: respLeagues | null;
  teamsData: respTeams | null;
  search: string | null;
}> = (props) => {
  const leaguesFiltered =
    props.leaguesData &&
    props.leaguesData.competitions.filter((league) => {
      if (
        props.search &&
        (league.area.name.toLowerCase().includes(props.search.toLowerCase()) ||
          league.name.toLowerCase().includes(props.search.toLowerCase()))
      ) {
        return true;
      } else {
        return false;
      }
    });
  const teamsFiltered =
    props.teamsData &&
    props.teamsData.teams.filter((team) => {
      if (
        props.search &&
        (team.name.toLowerCase().includes(props.search.toLowerCase()) ||
          team.shortName.toLowerCase().includes(props.search.toLowerCase()))
      ) {
        return true;
      } else {
        return false;
      }
    });
  return (
    <div className="search-results-container">
      <div className="search-results-leagues">
        <h3 className="search-results-name">{`Лиги (${
          leaguesFiltered && leaguesFiltered.length !== 0
            ? leaguesFiltered.length
            : 0
        })`}</h3>
        <div className="search-results-wrapper">
          {leaguesFiltered ? (
            leaguesFiltered.map((league) => {
              return <LeagueCard key={`${league.id}`} {...league} />;
            })
          ) : (
            <h4>нет результатов :(</h4>
          )}
        </div>
      </div>
      <div className="search-results-teams">
        <h3 className="search-results-name">{`Команды (${
          teamsFiltered ? teamsFiltered.length : 0
        })`}</h3>
        <div className="search-results-wrapper">
          {teamsFiltered && teamsFiltered.length !== 0 ? (
            teamsFiltered.map((team) => {
              return <TeamCard key={`${team.id}`} {...team} />;
            })
          ) : (
            <h4>нет результатов :(</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
