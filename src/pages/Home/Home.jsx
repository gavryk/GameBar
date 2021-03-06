import React from "react";
import { useSelector } from "react-redux";
import style from "./Home.module.scss";
import { motion, AnimatePresence } from "framer-motion";
//Components
import { GamesList, Loader } from "../../components";
import GameDetail from "../../components/GamesList/GameCard/GameDetail/GameDetail";
import { useLocation } from "react-router-dom";

const Home = () => {
  //Get games data from store
  const { popular, newGames, upcoming, searched, isLoaded } = useSelector(({ games }) => games);
  //Get Current location
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];

  return (
    <div className={style.homePage}>
      <AnimatePresence>
        {pathId && <GameDetail pathId={pathId} />}
      </AnimatePresence>
      {isLoaded ? (
        <motion.div className="pageContainer">
          <GamesList title="Searched Game" games={searched} />
          <GamesList title="Upcoming Games" games={upcoming} />
          <GamesList title="New Games" games={newGames} />
          <GamesList title="Popular Games" games={popular} />
        </motion.div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
