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
import { setLoading } from "store/loading/loadingSlice";
import { AxiosError } from "axios";
import { setDeniedModal, setManyReqModal } from "store/modal/modalSlice";

const Matches: React.FC<{
  search: string | null;
  leagueName: string | null;
  teamName: string | null;
  type: "league" | "team" | null;
  id: number | null;
  page: number;
}> = (props) => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage).matchesPage;

  const [initialMatches, setInitialMatches] = useState<
    respMatches["matches"] | null
  >(null);
  const [matchesByDate, setMatchesByDate] = useState<
    respMatches["matches"] | null
  >(null);
  const [resultSetFirst, setResultSetFirst] = useState<string | null>(null);
  const [resultSetLast, setResultSetLast] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    (async () => {
      dispatch(setLoading(true));
      try {
        const search = props.search;
        const matchesData = props.id
          ? await getMatches(props.type, props.id)
          : null;
        if (matchesData && search) {
          const filteredMatchesData = matchesData.matches.filter((match) => {
            if (
              match.area.name.toLowerCase().includes(search.toLowerCase()) ||
              match.competition.name
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              match.homeTeam.name
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              match.homeTeam.shortName
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              match.awayTeam.name
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              match.awayTeam.shortName
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              match.status.toLowerCase().includes(search.toLowerCase())
            ) {
              return true;
            } else {
              return false;
            }
          });
          setInitialMatches(filteredMatchesData);
          setTotalCount(filteredMatchesData.length);
          setResultSetFirst(matchesData.resultSet.first);
          setResultSetLast(matchesData.resultSet.last);
        } else {
          if (matchesData) {
            setInitialMatches(matchesData.matches);
            setTotalCount(matchesData.resultSet.count);
            setResultSetFirst(matchesData.resultSet.first);
            setResultSetLast(matchesData.resultSet.last);
          }
        }
      } catch (e) {
        const err = e as AxiosError;
        if (err.response?.status === 429) {
          dispatch(setManyReqModal());
        }
        if (err.response?.status === 403) {
          dispatch(setDeniedModal());
        }
      } finally {
        dispatch(setLoading(false));
      }
    })();
  }, [dispatch, props.id, props.search, props.type]);

  const setDateClickHandler = async () => {
    dispatch(setLoading(true));
    try {
      const fromDate = (
        document.getElementById("date-start") as HTMLInputElement
      ).value;
      const endDate = (document.getElementById("date-end") as HTMLInputElement)
        .value;

      const matchesData = props.id
        ? await getMatchesByDate(props.type, props.id, fromDate, endDate)
        : null;
      if (matchesData) {
        setMatchesByDate(matchesData.matches);
        setTotalCount(matchesData.resultSet.count);
      }
      dispatch(setMatchesFirstPage());
    } catch (e) {
      const err = e as AxiosError;
      if (err.response?.status === 429) {
        dispatch(setManyReqModal());
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="matches-container">
      {initialMatches && (
        <div className="matches-breadcrumbs">
          <Link
            className="breadcrumbs-leagues-link"
            to={
              props.type === "league"
                ? "/soccer-stat/leagues"
                : "/soccer-stat/teams"
            }
          >
            {props.type === "league" ? "Лиги" : "Команды"}
          </Link>
          <div className="breadcrumbs-delimeter">-</div>
          <Link className="breadcrumbs-current" to="">
            {props.type === "league" ? props.leagueName : props.teamName}
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
              defaultValue={resultSetFirst ? resultSetFirst : ""}
              min={resultSetFirst ? resultSetFirst : ""}
              max={resultSetLast ? resultSetLast : ""}
            ></input>
          </div>
          <span>по</span>
          <div className="date-select-end">
            <input
              id="date-end"
              type="date"
              name="trip-start"
              defaultValue={resultSetLast ? resultSetLast : ""}
              min={resultSetFirst ? resultSetFirst : ""}
              max={resultSetLast ? resultSetLast : ""}
            ></input>
          </div>
          <div className="set-button-wrapper">
            <button className="set-date" onClick={setDateClickHandler}>
              показать
            </button>
          </div>
        </div>
      )}
      {initialMatches && (
        <div className="matches-content">
          {totalCount !== 0 ? (
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
                {(matchesByDate ? matchesByDate : initialMatches).map(
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
          ) : (
            <h4 style={{ textAlign: "center" }}>нет результатов :(</h4>
          )}
          {totalCount !== 0 && (
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
                  page === Math.ceil(totalCount / matchesPageLimit) &&
                  `disabled`
                }`}
                onClick={() => dispatch(setMatchesPage(page + 1))}
              >
                &#62;
              </div>
              <div
                className={`double-arrow right-double-arrow ${
                  page === Math.ceil(totalCount / matchesPageLimit) &&
                  `disabled`
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
          )}
        </div>
      )}
    </div>
  );
};

export default Matches;
