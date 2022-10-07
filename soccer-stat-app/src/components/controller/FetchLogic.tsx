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

export type LeagueData = {
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
};

export const getLeagues = async (restUrl: string) => {
  try {
    const resp = await axios.get(`${url + restUrl}`, keyConfig);
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
