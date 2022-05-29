import React from "react";
import { useSelector } from "react-redux";
import style from "./Home.module.scss";
import { motion } from "framer-motion";
//Components
import { GameCard } from "../../components";

const Home = () => {
  //Get games data from store
  const { popular, newGames, upcoming } = useSelector(({ games }) => games);

  return (
    <div className={style.homePage}>
      <div className="pageContainer">
        <motion.div className={style.gamesRow}>
          <h2>Upcoming Games</h2>
          <motion.div className={style.gamesList}>
            {upcoming &&
              upcoming.map((game) => {
                return <GameCard key={game.id} {...game} />;
              })}
          </motion.div>
        </motion.div>
        <motion.div className={style.gamesRow}>
          <h2>New Games</h2>
          <motion.div className={style.gamesList}>
            {newGames &&
              newGames.map((game) => {
                return <GameCard key={game.id} {...game} />;
              })}
          </motion.div>
        </motion.div>
        <motion.div className={style.gamesRow}>
          <h2>Popular Games</h2>
          <motion.div className={style.gamesList}>
            {popular &&
              popular.map((game) => {
                return <GameCard key={game.id} {...game} />;
              })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
