import axios from "axios";
import { gameDetailURL, gameScreenShotsURL } from "../../api/api";

export const loadDetail = (id) => {
    return async (dispatch) => {
        const datailData = await axios.get(gameDetailURL(id));
        const screenShotsData = await axios.get(gameScreenShotsURL(id));

        dispatch({
          type: "GET_DETAIL",
          payload: {
            game: datailData.data,
            screenshots: screenShotsData.data.results,
          },
        });
    }
}