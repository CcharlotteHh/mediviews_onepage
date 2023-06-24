import React from "react";
import styles from "./home.module.scss"
import HomePageFigure from "../../components/homefigure/HomePageFigure";
import Trending from "../../components/trending/Trending";
import Blog from '../../components/blog/blog';

function Home() {
  return (
    <div className={styles.homeContainer}>
      <HomePageFigure className={styles.HomePageFigure}></HomePageFigure>
      <h1>Trending</h1>
      <Trending></Trending>
      <Blog></Blog>
    </div>
  );
}

export default Home;
