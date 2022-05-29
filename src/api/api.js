//Base URL
const api_url = "https://api.rawg.io/api/";

//Getting the date
const getCurrentDay = () => {
    let day = new Date().getDate();
    return day < 10 ? `0${day}` : day;
}
const getCurrentMonth = () => {
    let month = new Date().getMonth() + 1;
    return month < 10 ? `0${month}` : month;
}

//Current year-month-day
const currentYear = new Date().getFullYear(),
      currentMonth = getCurrentMonth(),
      currentDay = getCurrentDay(),
      currentDate = `${currentYear}-${currentMonth}-${currentDay}`,
      lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`,
      nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Fetch games urls
const popular_games = `games?key=${process.env.REACT_APP_GAMES_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=20`,
      upcoming_games = `games?key=${process.env.REACT_APP_GAMES_API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=20`,
      new_games = `games?key=${process.env.REACT_APP_GAMES_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=20`;
      
//Exports get functions
export const popularGamesURL = () => `${api_url}${popular_games}`;
export const upcomingGamesURL = () => `${api_url}${upcoming_games}`;
export const newGamesURL = () => `${api_url}${new_games}`;
export const gameDetailURL = (id) =>`${api_url}games/${id}?key=${process.env.REACT_APP_GAMES_API}`;
export const gameScreenShotsURL = (id) =>`${api_url}games/${id}/screenshots?key=${process.env.REACT_APP_GAMES_API}`;