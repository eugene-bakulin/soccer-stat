import { getMatches, respMatches } from "components/controller/FetchLogic";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Match from "./Match";
import "./matches.css";

const Matches: React.FC<{ id: number | null }> = (props) => {
  const [matchesLoaded, setMatches] = useState<respMatches | null>(null);
  useEffect(() => {
    (async () => {
      const matchesData = props.id ? await getMatches(props.id) : null;
      setMatches(matchesData);
    })();
  }, [props.id]);
  return (
    <div className="matches-container">
      {matchesLoaded && (
        <div className="matches-breadcrumbs">
          <Link className="breadcrumbs-leagues-link" to="/leagues">
            Лиги
          </Link>
          <div className="breadcrumbs-delimeter">-</div>
          <Link className="breadcrumbs-current" to="">
            {matchesLoaded && matchesLoaded.competition.name}
          </Link>
        </div>
      )}
      {matchesLoaded && (
        <div className="matches-header">
          <h2>Матчи</h2>
        </div>
      )}
      {matchesLoaded && (
        <div className="matches-date-select">
          <span>C</span>
          <div className="date-select-start">
            <input
              type="date"
              id="start"
              name="trip-start"
              defaultValue={matchesLoaded?.resultSet.first}
              min={matchesLoaded?.resultSet.first}
              max={matchesLoaded?.resultSet.last}
            ></input>
          </div>
          <span>по</span>
          <div className="date-select-end">
            <input
              type="date"
              id="end"
              name="trip-start"
              defaultValue={matchesLoaded.resultSet.last}
              min={matchesLoaded.resultSet.first}
              max={matchesLoaded.resultSet.last}
            ></input>
          </div>
          <div className="set-button-wrapper">
            <button className="set-date">OK</button>
          </div>
        </div>
      )}
      {matchesLoaded && (
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
              {matchesLoaded.matches.map((match) => (
                <Match key={`${match.id}`} {...match} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Matches;
