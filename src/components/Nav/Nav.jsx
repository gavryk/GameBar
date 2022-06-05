import React from 'react';
import style from './Nav.module.scss';
import { motion } from 'framer-motion';

const Nav = () => {
  return (
    <motion.div className={style.navBar}>
      <motion.div className={style.logo}>
        <span>GameBar</span>
      </motion.div>
      <div className={style.search}>
        <input type="text" />
        <button>Search</button>
      </div>
    </motion.div>
  )
}

export default Nav