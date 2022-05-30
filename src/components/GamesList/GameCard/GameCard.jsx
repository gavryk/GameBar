import React from "react";
//Styling and Animation
import style from "./GameCard.module.scss";
import { motion } from "framer-motion";
import { loadDetail } from "../../../redux/actions/getDetail";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const GameCard = ({ name, background_image, released, id }) => {
  const dispatch = useDispatch();

  const gameInfoHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id));
  }

  return (
    <motion.div className={style.gameCard} onClick={gameInfoHandler}>
      <NavLink to={`/game/${id}`}>
        <div className={style.cardInfo}>
          <h4>{name}</h4>
          <span>{released}</span>
        </div>
        <div className={style.cardImage}>
          <img src={background_image} alt={name} />
        </div>
      </NavLink>
    </motion.div>
  );
};

export default GameCard;
