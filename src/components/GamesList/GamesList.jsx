import React from 'react';
import style from './GamesList.module.scss';
import { motion } from 'framer-motion';
import GameCard from './GameCard/GameCard';

const GamesList = ({games, title}) => {
  return (
    <>
      {games.length !== 0 ? (
        <motion.div className={style.gamesRow}>
          <motion.h2 className={style.title}>{title}</motion.h2>
          <motion.div className={style.gamesList}>
            {games &&
              games.map((game) => {
                return <GameCard key={game.id} {...game} />;
              })}
          </motion.div>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
}

export default GamesList