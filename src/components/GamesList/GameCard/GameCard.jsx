import React from "react";
//Styling and Animation
import style from "./GameCard.module.scss";
import { motion } from "framer-motion";
import { loadDetail } from "../../../redux/actions/getDetail";
import { useDispatch } from "react-redux";

const GameCard = ({ name, background_image, released, id }) => {
  const dispatch = useDispatch();

  const gameInfoHandler = () => {
    dispatch(loadDetail(id));
  }

  return (
    <motion.div className={style.gameCard} onClick={gameInfoHandler}>
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
