import React from "react";
//Styling and Animation
import style from "./GameCard.module.scss";
import { motion } from "framer-motion";
import { loadDetail } from "../../../redux/actions/getDetail";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { smallImage } from "../../../utils/utils";

const GameCard = ({ name, background_image, released, id }) => {
  const dispatch = useDispatch();

  const stringPathId = id.toString();

  const gameInfoHandler = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '5px';
    dispatch(loadDetail(id));
  }

  return (
    <motion.div layoutId={stringPathId} className={style.gameCard} onClick={gameInfoHandler}>
      <NavLink to={`/game/${id}`}>
        <motion.div className={style.cardInfo}>
          <motion.h4>{name}</motion.h4>
          <motion.span>{released}</motion.span>
        </motion.div>
        <motion.div className={style.cardImage}>
          <motion.img layoutId={`image${stringPathId}`} src={smallImage(background_image, 1280)} alt={name} />
        </motion.div>
      </NavLink>
    </motion.div>
  );
};

export default GameCard;
