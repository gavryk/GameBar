import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../../api/api";

export const fetchGames = () => {
    return async (dispatch) => {
        const popularGames = await axios.get(popularGamesURL()),
              upcomingGames = await axios.get(upcomingGamesURL()),
              newGames = await axios.get(newGamesURL());
        
        dispatch({
          type: "FETCH_GAMES",
          payload: {
            popular: popularGames.data.results,
            upcoming: upcomingGames.data.results,
            new: newGames.data.results,
          },
        });

        dispatch(setLoading());
    }
}

export const setLoading = () => {
  return {
    type: "SET_LOADING"
  }
}