import React from "react";
import style from "./GameDetail.module.scss";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const GameDetail = () => {
  const { game, screenshots } = useSelector((state) => state.gameDetail);

  return (
    <motion.div className={style.gameDetail}>
      <div className={style.detail}>
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {game.platforms.map(({ platform }) => {
                return <h4 key={platform.id}>{platform.name}</h4>;
              })}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={game.background_image} alt={game.name} />
        </div>
        <div className="description">
          <p>{game.description_raw}</p>
        </div>
        <div className="gallery">
          {screenshots &&
            screenshots.map(({ image, id }) => {
              return <img key={id} src={image} alt={game.name} />;
            })}
        </div>
      </div>
    </motion.div>
  );
};

export default GameDetail;
