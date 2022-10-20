import {
  leaguesPageLimit,
  matchesPageLimit,
  pageMaker,
  teamsPageLimit,
} from "components/controller/pagination/PaginationLogic";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  selectPage,
  setLeaguesPage,
  setMatchesPage,
  setTeamsPage,
} from "../../../store/pagination/matchesPaginationSlice";

const PaginationPages: React.FC<{
  type: "matches" | "leagues" | "teams";
  respCount: number;
}> = (props) => {
  const dispatch = useAppDispatch();
  const pagesFromSelector = useAppSelector(selectPage);
  const page =
    props.type === "matches"
      ? pagesFromSelector.matchesPage
      : props.type === "leagues"
      ? pagesFromSelector.leaguesPage
      : pagesFromSelector.teamsPage;

  const createSequence = () => {
    const rest = ["..."];
    const pagesCount =
      props.type === "matches"
        ? Math.ceil(props.respCount / matchesPageLimit)
        : props.type === "leagues"
        ? Math.ceil(props.respCount / leaguesPageLimit)
        : Math.ceil(props.respCount / teamsPageLimit);
    const initialNumbers = [];

    for (let i = 1; i <= pagesCount; i++) {
      initialNumbers.push(`${i}`);
    }

    if (pagesCount <= 5) {
      return initialNumbers;
    } else if (page === 1 || page === 2) {
      return initialNumbers
        .slice(0, 3)
        .concat(rest, initialNumbers[initialNumbers.length - 1]);
    } else if (page === pagesCount || page === pagesCount - 1) {
      return initialNumbers
        .slice(0, 1)
        .concat(
          rest,
          initialNumbers.slice(initialNumbers.length - 3, initialNumbers.length)
        );
    } else {
      if (page === 3) {
        return initialNumbers
          .slice(0, 1)
          .concat(
            initialNumbers.slice(page - 2, page + 1),
            rest,
            initialNumbers[initialNumbers.length - 1]
          );
      }
      if (page === pagesCount - 2) {
        return initialNumbers
          .slice(0, 1)
          .concat(
            rest,
            initialNumbers.slice(page - 2, page + 1),
            initialNumbers[initialNumbers.length - 1]
          );
      }
      return initialNumbers
        .slice(0, 1)
        .concat(
          rest,
          initialNumbers.slice(page - 2, page + 1),
          rest,
          initialNumbers[initialNumbers.length - 1]
        );
    }
  };

  useEffect(() => {
    const pagesContainer = document.querySelector(".pagination-pages");

    if (pagesContainer) {
      pagesContainer.addEventListener("click", ({ target, currentTarget }) => {
        if (
          target !== currentTarget &&
          (target as HTMLElement).innerText !== "..."
        ) {
          if (props.type === "matches") {
            dispatch(setMatchesPage(+(target as HTMLElement).innerText));
          } else if (props.type === "leagues") {
            dispatch(setLeaguesPage(+(target as HTMLElement).innerText));
          } else {
            dispatch(setTeamsPage(+(target as HTMLElement).innerText));
          }
        }
      });
    }
  });

  return (
    <div className="pagination-pages">{pageMaker(createSequence(), page)}</div>
  );
};

export default PaginationPages;
