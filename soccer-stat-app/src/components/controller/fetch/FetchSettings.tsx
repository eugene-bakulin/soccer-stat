import "dotenv/config";

export const proxy = "https://morning-temple-18735.herokuapp.com/";

export const url =
  "https://morning-temple-18735.herokuapp.com/http://api.football-data.org/v4/";

export const keyConfig = {
  headers: {
    "X-Auth-Token": process.env.REACT_APP_API_KEY,
  },
};
