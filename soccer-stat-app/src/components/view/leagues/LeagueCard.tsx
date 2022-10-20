import { respLeagues } from "components/controller/fetch/FetchLogic";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { setMatchId, setMatchType } from "../../../store/matchID/matchIdSlice";

const LeagueCard: React.FC<respLeagues["competitions"][0]> = (data) => {
  const history = useNavigate();
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    dispatch(setMatchId(data.id));
    dispatch(setMatchType("league"));
    history("/matches");
  };
  return (
    <div className="league-card" onClick={clickHandler}>
      <div className="league-info">
        <div className="league-name">
          <h3>{`${data.name}`}</h3>
        </div>
        <div className="league-emblem">
          {data.emblem && <img src={data.emblem} alt="league emblem"></img>}
        </div>
      </div>
      <div className="league-area-info">
        <div className="league-area-name">
          <h4>{`${data.area.name}`}</h4>
        </div>
        <div className="league-area-flag">
          {data.area.flag && <img src={data.area.flag} alt="area flag"></img>}
        </div>
      </div>
    </div>
  );
};

export default LeagueCard;
