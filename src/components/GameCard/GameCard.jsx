import React from "react";
//Styling and Animation
import style from "./GameCard.module.scss";
import { motion } from "framer-motion";

const GameCard = ({ name, background_image, released }) => {
  return (
    <motion.div className={style.gameCard}>
      <div className={style.cardInfo}>
        <h4>{name}</h4>
        <span>{released}</span>
      </div>
      <div className={style.cardImage}>
        <img src={background_image} alt={name} />
      </div>
    </motion.div>
  );
};

export default GameCard;
