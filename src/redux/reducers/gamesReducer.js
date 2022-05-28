const initState = {
  popularGames: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const games = (state = initState, action) => {
    switch (action.type) {
      case "SET_POPULAR_GAMES":
        return {
          ...state,
          popularGames: action.payload,
        };
      default:
        return state;
    }
}

export default games;
