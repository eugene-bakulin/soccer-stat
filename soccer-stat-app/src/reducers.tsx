const initialState = {
  id: null,
  type: null,
  matchesPage: 1,
  leaguesPage: 1,
  teamsPage: 1,
  teamName: null,
  isLoading: false,
};

export default function rootReducer(state = initialState) {
  return state;
}
