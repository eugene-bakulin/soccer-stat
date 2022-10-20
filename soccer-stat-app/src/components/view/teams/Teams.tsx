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

const Teams: React.FC = () => {
  const [teamsIsLoaded, setTeams] = useState<respTeams | null>(null);
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage).teamsPage;
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const teamsData = await getTeams();
      setTeams(teamsData);
      if (teamsData) {
        setTotalCount(teamsData.count);
      }
    })();
  }, []);

  return (
    <div className="teams">
      <div className="teams-container">
        {teamsIsLoaded &&
          teamsIsLoaded.teams.map((team, index) => {
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
