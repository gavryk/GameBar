import React from "react";
import style from "./GameDetail.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../../../../utils/utils";
import playstation from '../../../../img/playstation.svg';
import steam from '../../../../img/steam.svg';
import xbox from '../../../../img/xbox.svg';
import nintendo from "../../../../img/nintendo.svg";
import apple from "../../../../img/apple.svg";
import gamepad from "../../../../img/gamepad.svg";

const GameDetail = ({ pathId }) => {
  const { game, screenshots, isLoading } = useSelector(
    (state) => state.gameDetail
  );
  const navigate = useNavigate();

  //Exit Detail
  const exitDetailHandler = () => {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
    navigate("/", { replace: true });
  };

  const getPlaform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "PlayStation 5":
        return playstation;
      case "PC":
        return steam;
      case "Xbox One":
        return xbox;
      case "Xbox Series S/X":
        return xbox;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  }

  return (
    <motion.div>
      {!isLoading && (
        <motion.div className={style.gameDetail}>
          <motion.div className={style.detailWrapper} layoutId={pathId}>
            <motion.button
              className={style.closePop}
              onClick={exitDetailHandler}
            >
              <FontAwesomeIcon icon={faXmark} />
            </motion.button>
            <motion.div className={style.detail}>
              <motion.div className={style.stats}>
                <div className="rating">
                  <h3>{game.name}</h3>
                  <p>Rating: {game.rating}</p>
                </div>
                <div className={style.info}>
                  <h3>Platforms</h3>
                  <div className={style.platforms}>
                    {game.platforms.map(({ platform }) => {
                      return (
                        <img
                          key={platform.id}
                          src={getPlaform(platform.name)}
                          alt={platform.name}
                        ></img>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
              <div className="media">
                <motion.img
                  layoutId={`image${pathId}`}
                  src={smallImage(game.background_image, 1280)}
                  alt={game.name}
                />
              </div>
              <div className="description">
                <p>{game.description_raw}</p>
              </div>
              <div className="gallery">
                {screenshots &&
                  screenshots.map(({ image, id }) => {
                    return (
                      <img
                        key={id}
                        src={smallImage(image, 1280)}
                        alt={game.name}
                      />
                    );
                  })}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default GameDetail;
