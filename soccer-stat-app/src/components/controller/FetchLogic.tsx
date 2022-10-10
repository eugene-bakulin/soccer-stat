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

export type leagueCardImg = {
  emblem: {
    type: string;
    body: string;
  } | null;
  flag: {
    type: string;
    body: string;
  } | null;
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

// export const getLeagueCardImages = async (imageUrl: string) => { // fetching images
//   try {
//     console.log(imageUrl);
//     if (imageUrl) {
//       if (imageUrl.endsWith(".png")) {
//         const resp = await axios.get(proxy + imageUrl, {
//           responseType: "blob",
//         });
//         const imgData = await resp.data;
//         const imgBlob = new Blob([imgData]);
//         return {
//           type: "png",
//           body: URL.createObjectURL(imgBlob),
//         };
//       } else {
//         const resp = await axios.get(proxy + imageUrl, {
//           responseType: "text",
//         });
//         const imgData = await resp.data;
//         return {
//           type: "svg",
//           body: imgData,
//         };
//       }
//     } else {
//       return null;
//     }
//   } catch (e) {
//     console.error(e);
//     return null;
//   }
// };
