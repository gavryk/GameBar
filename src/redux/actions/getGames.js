import axios from "axios";
import { popularGamesURL } from "../../api/api";

export const fetchPopularGames = () => {
    return async (dispatch) => {
        await axios.get(popularGamesURL())
            .then(data => {
                dispatch(setPopularGames(data.data.results));
            });
    }
}

export const setPopularGames = (items) => {
    return {
        type: "SET_POPULAR_GAMES",
        payload: items
    }
}