import React from 'react';
import HomePageFigureImg from '../../assets/img/HomePageFigureImg.jpg';
import styles from './homepagefigure.module.scss';
function HomePageFigure() {
  return (
    <figure className={styles.figure}>
      <img src={HomePageFigureImg} alt='HomePageFigureImg'></img>
    </figure>
  )
}

export default HomePageFigure
