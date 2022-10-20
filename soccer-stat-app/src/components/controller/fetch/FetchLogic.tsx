import axios from "axios";
import { keyConfig, url } from "./FetchSettings";

export type respLeagues = {
  count: number;
  filters: {
    client: string;
  };
  competitions: {
    id: number;
    area: {
      id: number;
      name: string;
      code: string;
      flag: string;
    };
    name: string;
    code: string;
    type: string;
    emblem: string;
    plan: string;
    currentSeason: {
      id: number;
      startDate: string;
      endDate: string;
      currentMatchday: number;
      winner: null | string;
    };
    numberOfAvailableSeasons: number;
    lastUpdated: string;
  }[];
};

export type respMatches = {
  filters: {
    season: string;
  };
  resultSet: {
    count: number;
    first: string;
    last: string;
    played: number;
  };
  competition: {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
  };
  matches: {
    area: {
      id: number;
      name: string;
      code: string;
      flag: string;
    };
    competition: {
      id: number;
      name: string;
      code: string;
      type: string;
      emblem: string;
    };
    season: {
      id: number;
      startDate: string;
      endDate: string;
      currentMatchday: number;
      winner: null | string;
    };
    id: number;
    utcDate: string;
    status:
      | "SCHEDULED"
      | "TIMED"
      | "IN_PLAY"
      | "PAUSED"
      | "EXTRA_TIME"
      | "PENALTY_SHOOTOUT"
      | "FINISHED"
      | "SUSPENDED"
      | "POSTPONED"
      | "CANCELLED"
      | "AWARDED";
    matchday: number;
    stage: string;
    group: null | string;
    lastUpdated: string;
    homeTeam: {
      id: number;
      name: string;
      shortName: string;
      tla: string;
      crest: string;
    };
    awayTeam: {
      id: number;
      name: string;
      shortName: string;
      tla: string;
      crest: string;
    };
    score: {
      winner: string;
      duration: "REGULAR" | "EXTRA_TIME" | "PENALTY_SHOOTOUT";
      fullTime: {
        home: number;
        away: number;
      };
      regularTime: {
        home: number | null;
        away: number | null;
      };
      extraTime: {
        home: number | null;
        away: number | null;
      };
      penalties: {
        home: number | null;
        away: number | null;
      };
    };
    odds: {
      msg: string;
    };
    referees: [];
  }[];
};

export type respTeams = {
  count: number;
  filters: {
    limit: number;
    offset: number;
    permission: "TIER_ONE" | "TIER_TWO" | "TIER_THREE" | "TIER_FOUR";
  };
  teams: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    address: string;
    website: string;
    founded: number;
    clubColors: string;
    venue: string;
    lastUpdated: string;
  }[];
};

export const getLeagues = async () => {
  try {
    const resp = await axios.get(url + "competitions/", keyConfig);
    if (resp.status === 200) {
      return (await resp.data) as respLeagues;
    } else {
      return null; // add handler later!
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getTeams = async () => {
  try {
    const resp = await axios.get(url + "teams/", keyConfig);
    if (resp.status === 200) {
      return (await resp.data) as respTeams;
    } else {
      return null; // add handler later!
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getMatches = async (
  type: "league" | "team" | null,
  id: number
) => {
  try {
    if (type) {
      const resp =
        type === "league"
          ? await axios.get(
              url + "competitions/" + String(id) + "/matches/",
              keyConfig
            )
          : await axios.get(
              url + "teams/" + String(id) + "/matches/",
              keyConfig
            );
      if (resp.status === 200) {
        return (await resp.data) as respMatches;
      } else {
        return null; // add handler later!
      }
    } else {
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getMatchesByDate = async (
  type: "league" | "team" | null,
  id: number,
  dateFrom: string,
  dateTo: string
) => {
  try {
    if (type) {
      const resp =
        type === "league"
          ? await axios.get(
              url +
                "competitions/" +
                String(id) +
                "/matches?dateFrom=" +
                dateFrom +
                "&dateTo=" +
                dateTo,
              keyConfig
            )
          : await axios.get(
              url +
                "teams/" +
                String(id) +
                "/matches?dateFrom=" +
                dateFrom +
                "&dateTo=" +
                dateTo,
              keyConfig
            );
      if (resp.status === 200) {
        return (await resp.data) as respMatches;
      } else {
        return null; // add handler later!
      }
    } else {
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};
