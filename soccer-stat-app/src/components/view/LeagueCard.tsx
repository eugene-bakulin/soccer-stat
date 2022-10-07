import { LeagueData } from "components/controller/FetchLogic";
import React from "react";

const LeagueCard: React.FC<LeagueData> = (data) => {
  return (
    <div className="league-card">
      <div className="league-info">
        <div className="league-name">{`${data.name}`}</div>
        <div className="league-emblem">
          <img src={`${data.emblem}`} alt="league emblem"></img>
        </div>
      </div>
      <div className="league-area-info">
        <div className="league-area-name">{`${data.area.name}`}</div>
        <div className="league-area-flag">
          <img src={`${data.area.flag}`} alt="league area flag"></img>
        </div>
      </div>
    </div>
  );
};

export default LeagueCard;
