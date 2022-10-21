import {
  getLeagues,
  respLeagues,
} from "components/controller/fetch/FetchLogic";
import { leaguesPageLimit } from "components/controller/pagination/PaginationLogic";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { setLoading } from "store/loading/loadingSlice";
import {
  selectPage,
  setLeaguesFirstPage,
  setLeaguesPage,
} from "store/pagination/matchesPaginationSlice";
import PaginationPages from "../pagination/PaginationPages";
import LeagueCard from "./LeagueCard";
import "./leagues.css";

const Leagues: React.FC = () => {
  const [leaguesIsLoaded, setLeaguesLoaded] = useState<respLeagues | null>(
    null
  );
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage).leaguesPage;
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    (async () => {
      dispatch(setLoading(true));
      const leaguesData = await getLeagues();
      setLeaguesLoaded(leaguesData);
      if (leaguesData) {
        setTotalCount(leaguesData.count);
      }
      dispatch(setLoading(false));
    })();
  }, [dispatch]);

  return (
    <div className="leagues">
      <div className="leagues-container">
        {leaguesIsLoaded &&
          leaguesIsLoaded.competitions.map((league, index) => {
            if (
              index >= (page - 1) * leaguesPageLimit &&
              index <= page * leaguesPageLimit - 1
            ) {
              return <LeagueCard key={`${league.id}`} {...league} />;
            }
          })}
      </div>
      {leaguesIsLoaded && (
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
