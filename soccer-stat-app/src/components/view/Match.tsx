import { respMatches } from "components/controller/FetchLogic";
import React from "react";

const Match: React.FC<respMatches["matches"][0]> = (matchInfo) => {
  const date = matchInfo.utcDate.split("T")[0];
  const time = matchInfo.utcDate.split("T")[1].slice(0, 5);

  const displayStatus = () => {
    switch (matchInfo.status) {
      case "SCHEDULED":
        return "Запланирован";
      case "IN_PLAY":
        return "В игре";
      case "PAUSED":
        return "Пауза";
      case "FINISHED":
        return "Завершен";
      case "POSTPONED":
        return "Отложен";
      case "SUSPENDED":
        return "Приостановлен";
      case "CANCELLED":
        return "Отменен";
      case "PENALTY_SHOOTOUT":
        return "Пенальти";
      case "TIMED":
        return "Рассчитан по времени";
      case "AWARDED":
        return "Присуждение";
    }
    return "-";
  };

  const regularTimeScore = () => {
    if (matchInfo.score.winner) {
      if (
        matchInfo.score.duration === "EXTRA_TIME" ||
        matchInfo.score.duration === "PENALTY_SHOOTOUT"
      ) {
        if (
          !Object.is(matchInfo.score.regularTime.home, null) &&
          !Object.is(matchInfo.score.regularTime.away, null)
        ) {
          return `${matchInfo.score.regularTime.home} : ${matchInfo.score.regularTime.away}`;
        } else {
          return "-";
        }
      } else {
        if (
          !Object.is(matchInfo.score.fullTime.home, null) &&
          !Object.is(matchInfo.score.fullTime.away, null)
        ) {
          return `${matchInfo.score.fullTime.home} : ${matchInfo.score.fullTime.away}`;
        }
      }
    }
    return "-";
  };

  const extraTimeScore = () => {
    if (matchInfo.score.winner) {
      if (
        matchInfo.score.duration === "EXTRA_TIME" ||
        matchInfo.score.extraTime
      ) {
        if (
          !Object.is(matchInfo.score.extraTime.home, null) &&
          !Object.is(matchInfo.score.extraTime.away, null)
        ) {
          return `${matchInfo.score.extraTime.home} : ${matchInfo.score.extraTime.away}`;
        }
      }
    }
    return "-";
  };

  const penaltyScore = () => {
    if (matchInfo.score.winner) {
      if (
        matchInfo.score.duration === "PENALTY_SHOOTOUT" ||
        matchInfo.score.penalties
      ) {
        if (
          !Object.is(matchInfo.score.penalties.home, null) &&
          !Object.is(matchInfo.score.penalties.away, null)
        ) {
          return `${matchInfo.score.penalties.home} : ${matchInfo.score.penalties.away}`;
        }
      }
    }
    return "-";
  };

  return (
    <tr>
      <td width={"80px"}>{date}</td>
      <td width={"40px"}>{time}</td>
      <td>{displayStatus()}</td>
      <td>{matchInfo.homeTeam.name}</td>
      <td>{matchInfo.awayTeam.name}</td>
      <td align="center">{regularTimeScore()}</td>
      <td align="center">{extraTimeScore()}</td>
      <td align="center">{penaltyScore()}</td>
    </tr>
  );
};

export default Match;
