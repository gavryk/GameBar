const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
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
      default:
        return state;
    }
}

export default games;
