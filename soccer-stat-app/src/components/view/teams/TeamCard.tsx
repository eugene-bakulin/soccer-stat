import { respTeams } from "components/controller/fetch/FetchLogic";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import {
  setMatchId,
  setMatchType,
  setTeamName,
} from "store/matchID/matchIdSlice";

const TeamCard: React.FC<respTeams["teams"][0]> = (data) => {
  const history = useNavigate();
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    localStorage.setItem("idForMatchDisplay", `${data.id}`);
    localStorage.setItem("typeForMatchDisplay", "team");
    localStorage.setItem("nameForMatchDisplay", `${data.name}`);
    dispatch(setMatchId(data.id));
    dispatch(setMatchType("team"));
    dispatch(setTeamName(data.name));
    history("/matches");
  };

  return (
    <div className="team-card" onClick={clickHandler}>
      <div className="team-name">
        <h3>{`${data.name}`}</h3>
      </div>
      <div className="team-emblem">
        {data.crest && <img src={data.crest} alt={`${data.name} emblem`}></img>}
      </div>
    </div>
  );
};

export default TeamCard;
