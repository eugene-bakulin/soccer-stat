import {
  getMatches,
  getMatchesByDate,
  respMatches,
} from "components/controller/fetch/FetchLogic";
import { matchesPageLimit } from "components/controller/pagination/PaginationLogic";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import Match from "./Match";
import "./matches.css";
import PaginationPages from "../pagination/PaginationPages";
import {
  selectPage,
  setMatchesFirstPage,
  setMatchesPage,
} from "../../../store/pagination/matchesPaginationSlice";

const Matches: React.FC<{
  teamName: string | null;
  type: "league" | "team" | null;
  id: number | null;
  page: number;
}> = (props) => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage).matchesPage;

  const [initialMatches, setInitialMatches] = useState<respMatches | null>(
    null
  );
  const [matchesByDate, setMatchesByDate] = useState<respMatches | null>(null);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const matchesData = props.id
        ? await getMatches(props.type, props.id)
        : null;
      setInitialMatches(matchesData);
      if (matchesData) {
        setTotalCount(matchesData.resultSet.count);
      }
    })();
  }, [props.id, props.type]);

  const setDateClickHandler = async () => {
    const fromDate = (document.getElementById("date-start") as HTMLInputElement)
      .value;
    const endDate = (document.getElementById("date-end") as HTMLInputElement)
      .value;

    const matchesData = props.id
      ? await getMatchesByDate(props.type, props.id, fromDate, endDate)
      : null;
    setMatchesByDate(matchesData);
    if (matchesData) {
      setTotalCount(matchesData.resultSet.count);
    }
    dispatch(setMatchesFirstPage());
  };

  return (
    <div className="matches-container">
      {initialMatches && (
        <div className="matches-breadcrumbs">
          <Link
            className="breadcrumbs-leagues-link"
            to={props.type === "league" ? "/leagues" : "/teams"}
          >
            {props.type === "league" ? "Лиги" : "Команды"}
          </Link>
          <div className="breadcrumbs-delimeter">-</div>
          <Link className="breadcrumbs-current" to="">
            {props.type === "league"
              ? initialMatches && initialMatches.competition.name
              : props.teamName}
          </Link>
        </div>
      )}
      {initialMatches && (
        <div className="matches-header">
          <h2>Матчи</h2>
        </div>
      )}
      {initialMatches && (
        <div className="matches-date-select">
          <span>C</span>
          <div className="date-select-start">
            <input
              id="date-start"
              type="date"
              name="trip-start"
              defaultValue={initialMatches?.resultSet.first}
              min={initialMatches.resultSet.first}
              max={initialMatches.resultSet.last}
            ></input>
          </div>
          <span>по</span>
          <div className="date-select-end">
            <input
              id="date-end"
              type="date"
              name="trip-start"
              defaultValue={initialMatches.resultSet.last}
              min={initialMatches.resultSet.first}
              max={initialMatches.resultSet.last}
            ></input>
          </div>
          <div className="set-button-wrapper">
            <button className="set-date" onClick={setDateClickHandler}>
              OK
            </button>
          </div>
        </div>
      )}
      {initialMatches && (
        <div className="matches-content">
          <table className="matches-table">
            <thead>
              <tr>
                <th rowSpan={2}>Дата</th>
                <th rowSpan={2}>Время</th>
                <th rowSpan={2}>Статус</th>
                <th rowSpan={2}>Команда А</th>
                <th rowSpan={2}>Команда Б</th>
                <th colSpan={3}>Счет</th>
              </tr>
              <tr>
                <th>Основное время</th>
                <th>Дополнительное время</th>
                <th>Пенальти</th>
              </tr>
            </thead>
            <tbody>
              {(matchesByDate ? matchesByDate : initialMatches).matches.map(
                (match, index) => {
                  if (
                    index >= (props.page - 1) * matchesPageLimit &&
                    index <= props.page * matchesPageLimit - 1
                  ) {
                    return <Match key={`${match.id}`} {...match} />;
                  }
                }
              )}
            </tbody>
          </table>
          <div className="matches-pagination">
            <div
              className={`double-arrow left-double-arrow ${
                page === 1 && `disabled`
              }`}
              onClick={() => dispatch(setMatchesFirstPage())}
            >
              &#8810;
            </div>
            <div
              className={`arrow left-arrow ${page === 1 && `disabled`}`}
              onClick={() => dispatch(setMatchesPage(page - 1))}
            >
              &#60;
            </div>
            <PaginationPages type={"matches"} respCount={totalCount} />
            <div
              className={`arrow right-arrow ${
                page === Math.ceil(totalCount / matchesPageLimit) && `disabled`
              }`}
              onClick={() => dispatch(setMatchesPage(page + 1))}
            >
              &#62;
            </div>
            <div
              className={`double-arrow right-double-arrow ${
                page === Math.ceil(totalCount / matchesPageLimit) && `disabled`
              }`}
              onClick={() =>
                dispatch(
                  setMatchesPage(Math.ceil(totalCount / matchesPageLimit))
                )
              }
            >
              &#8811;
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Matches;
