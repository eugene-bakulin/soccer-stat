import { getTeams, respTeams } from "components/controller/fetch/FetchLogic";
import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import "../teams/teams.css";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  selectPage,
  setTeamsFirstPage,
  setTeamsPage,
} from "store/pagination/matchesPaginationSlice";
import { teamsPageLimit } from "components/controller/pagination/PaginationLogic";
import PaginationPages from "../pagination/PaginationPages";
import { setLoading } from "store/loading/loadingSlice";

const Teams: React.FC<{ search: string | null }> = (props) => {
  const [teamsIsLoaded, setTeams] = useState<respTeams["teams"] | null>(null);
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage).teamsPage;
  const [totalCount, setTotalCount] = useState<number>(0);
  const search = props.search;

  useEffect(() => {
    (async () => {
      dispatch(setLoading(true));
      const teamsData = await getTeams();
      if (teamsData) {
        if (search) {
          const filteredTeams = teamsData.teams.filter((team) => {
            if (team.name.toLowerCase().includes(search.toLowerCase())) {
              return true;
            } else {
              return false;
            }
          });
          setTeams(filteredTeams);
          setTotalCount(filteredTeams.length + 1);
        } else {
          setTeams(teamsData.teams);
          setTotalCount(teamsData.count);
        }
      }
      dispatch(setLoading(false));
    })();
  }, [dispatch, search]);

  return (
    <div className="teams">
      <div className="teams-container">
        {teamsIsLoaded &&
          teamsIsLoaded.map((team, index) => {
            if (
              index >= (page - 1) * teamsPageLimit &&
              index <= page * teamsPageLimit - 1
            ) {
              return <TeamCard key={team.id} {...team} />;
            }
          })}
      </div>
      {teamsIsLoaded && (
        <div className="leagues-pagination">
          <div
            className={`double-arrow left-double-arrow ${
              page === 1 && `disabled`
            }`}
            onClick={() => dispatch(setTeamsFirstPage())}
          >
            &#8810;
          </div>
          <div
            className={`arrow left-arrow ${page === 1 && `disabled`}`}
            onClick={() => dispatch(setTeamsPage(page - 1))}
          >
            &#60;
          </div>
          <PaginationPages type={"teams"} respCount={totalCount} />
          <div
            className={`arrow right-arrow ${
              page === Math.ceil(totalCount / teamsPageLimit) && `disabled`
            }`}
            onClick={() => dispatch(setTeamsPage(page + 1))}
          >
            &#62;
          </div>
          <div
            className={`double-arrow right-double-arrow ${
              page === Math.ceil(totalCount / teamsPageLimit) && `disabled`
            }`}
            onClick={() =>
              dispatch(setTeamsPage(Math.ceil(totalCount / teamsPageLimit)))
            }
          >
            &#8811;
          </div>
        </div>
      )}
    </div>
  );
};

export default Teams;
