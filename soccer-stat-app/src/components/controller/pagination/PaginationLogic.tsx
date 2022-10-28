import React from "react";

export const matchesPageLimit = 15;
export const leaguesPageLimit = 10;
export const teamsPageLimit = 9;

export const pageMaker = (numbers: string[], current: number) => {
  return numbers.map((number, index) => (
    <div
      key={`${number}_${index}}`}
      className={number === "..." ? "rest" : `pagination-page page-${number}`}
      style={
        current === +number
          ? { fontWeight: "bolder", color: "rgb(255, 255, 1)" }
          : {}
      }
    >{`${number}`}</div>
  ));
};
