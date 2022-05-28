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

//Popular Games
const popular_games = `games?key=${process.env.REACT_APP_GAMES_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${api_url}${popular_games}`;