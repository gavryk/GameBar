import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../../api/api";

export const fetchGames = () => {
    return async (dispatch) => {
        const popularGames = await axios.get(popularGamesURL());
        const upcomingGames = await axios.get(upcomingGamesURL());
        const newGames = await axios.get(newGamesURL());
        
        dispatch({
          type: "FETCH_GAMES",
          payload: {
            popular: popularGames.data.results,
            upcoming: upcomingGames.data.results,
            new: newGames.data.results,
          },
        });
    }
}