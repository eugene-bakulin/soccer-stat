import { getLeagues, respLeagues } from "components/controller/FetchLogic";
import React, { useEffect, useState } from "react";
import LeagueCard from "./LeagueCard";
import "./leagues.css";

const Leagues: React.FC = () => {
  const [leaguesIsLoaded, setLeaguesLoaded] = useState<respLeagues | null>(
    null
  );

  useEffect(() => {
    (async () => {
      const leaguesData = await getLeagues();
      setLeaguesLoaded(leaguesData);
    })();
  }, []);

  return (
    <div className="leagues-container">
      {leaguesIsLoaded &&
        leaguesIsLoaded.competitions.map((league) => (
          <LeagueCard key={`${league.id}`} {...league} />
        ))}
    </div>
  );
};

export default Leagues;
