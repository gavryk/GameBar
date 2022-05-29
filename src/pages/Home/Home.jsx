import React from "react";
import { useSelector } from "react-redux";
import style from "./Home.module.scss";
import { motion } from "framer-motion";
//Components
import { GamesList } from "../../components";

const Home = () => {
  //Get games data from store
  const { popular, newGames, upcoming } = useSelector(({ games }) => games);

  return (
    <div className={style.homePage}>
      <div className="pageContainer">
        <GamesList title="Upcoming Games" games={upcoming} />
        <GamesList title="New Games" games={newGames} />
        <GamesList title="Popular Games" games={popular} />
      </div>
    </div>
  );
};

export default Home;