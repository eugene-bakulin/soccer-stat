import { respLeagues, respTeams } from "components/controller/fetch/FetchLogic";
import React, { useEffect, useState } from "react";
import LeagueCard from "../leagues/LeagueCard";
import TeamCard from "../teams/TeamCard";

const SearchPage: React.FC<{
  leaguesData: respLeagues | null;
  teamsData: respTeams | null;
  search: string | null;
}> = (props) => {
  return (
    <div className="search-results-container">
      <div className="search-results-leagues">
        <div>Лиги</div>
        {props.leaguesData &&
          props.leaguesData.competitions
            .filter((league) => {
              if (
                props.search &&
                (league.area.name
                  .toLowerCase()
                  .includes(props.search.toLowerCase()) ||
                  league.name
                    .toLowerCase()
                    .includes(props.search.toLowerCase()))
              ) {
                return true;
              } else {
                return false;
              }
            })
            .map((league) => {
              return <LeagueCard key={`${league.id}`} {...league} />;
            })}
      </div>
      <div className="search-results-teams">
        <div>Команды</div>
        {props.teamsData &&
          props.teamsData.teams
            .filter((team) => {
              if (
                props.search &&
                (team.name.toLowerCase().includes(props.search.toLowerCase()) ||
                  team.shortName
                    .toLowerCase()
                    .includes(props.search.toLowerCase()))
              ) {
                return true;
              } else {
                return false;
              }
            })
            .map((team) => {
              return <TeamCard key={`${team.id}`} {...team} />;
            })}
      </div>
    </div>
  );
};

export default SearchPage;
