import { respLeagues } from "components/controller/fetch/FetchLogic";
import { leaguesPageLimit } from "components/controller/pagination/PaginationLogic";
import React from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  selectPage,
  setLeaguesFirstPage,
  setLeaguesPage,
} from "store/pagination/matchesPaginationSlice";
import PaginationPages from "../pagination/PaginationPages";
import LeagueCard from "./LeagueCard";
import "./leagues.css";

const Leagues: React.FC<{
  leaguesData: respLeagues | null;
}> = (props) => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage).leaguesPage;
  const leagues = props.leaguesData;
  const totalCount = props.leaguesData ? props.leaguesData.count : 0;

  return (
    <div className="leagues">
      <div className="leagues-container">
        {leagues &&
          leagues.competitions.map((competition, index) => {
            if (
              index >= (page - 1) * leaguesPageLimit &&
              index <= page * leaguesPageLimit - 1
            ) {
              return <LeagueCard key={`${competition.id}`} {...competition} />;
            }
          })}
      </div>
      {leagues && (
        <div className="teams-pagination">
          <div
            className={`double-arrow left-double-arrow ${
              page === 1 && `disabled`
            }`}
            onClick={() => dispatch(setLeaguesFirstPage())}
          >
            &#8810;
          </div>
          <div
            className={`arrow left-arrow ${page === 1 && `disabled`}`}
            onClick={() => dispatch(setLeaguesPage(page - 1))}
          >
            &#60;
          </div>
          <PaginationPages type={"leagues"} respCount={totalCount} />
          <div
            className={`arrow right-arrow ${
              page === Math.ceil(totalCount / leaguesPageLimit) && `disabled`
            }`}
            onClick={() => dispatch(setLeaguesPage(page + 1))}
          >
            &#62;
          </div>
          <div
            className={`double-arrow right-double-arrow ${
              page === Math.ceil(totalCount / leaguesPageLimit) && `disabled`
            }`}
            onClick={() =>
              dispatch(setLeaguesPage(Math.ceil(totalCount / leaguesPageLimit)))
            }
          >
            &#8811;
          </div>
        </div>
      )}
    </div>
  );
};

export default Leagues;
