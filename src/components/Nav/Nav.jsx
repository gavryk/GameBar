import React, { useState } from 'react';
import style from './Nav.module.scss';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { searchGame } from '../../redux/actions/getGames';
import { fadeIn } from '../../animations';

const Nav = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');

  const inputHandler = (e) => {
    setInputText(e.target.value);
    
  }

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(searchGame(inputText));
    setInputText('');
  }
  return (
    <motion.div variants={fadeIn} initial='hidden' animate='show' className={style.navBar}>
      <motion.div className={style.logo} onClick={clearSearched}>
        <span>GameBar</span>
      </motion.div>
      <form className={style.search} onSubmit={submitSearch}>
        <input value={inputText} onChange={inputHandler} type="text" />
        <button type="submit">Search</button>
      </form>
    </motion.div>
  );
}

export default Nav