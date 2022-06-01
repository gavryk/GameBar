const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
  isLoaded: false
};

const games = (state = initState, action) => {
    switch (action.type) {
      case "FETCH_GAMES":
        return {
          ...state,
          popular: action.payload.popular,
          newGames: action.payload.new,
          upcoming: action.payload.upcoming,
        };
      case "SET_LOADING":
        return {
          ...state,
          isLoaded: true
        }
      default:
        return state;
    }
}

export default games;
