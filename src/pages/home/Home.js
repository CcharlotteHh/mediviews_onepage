import React from "react";
import styles from "./home.module.scss"
import HomePageFigure from "../../components/homefigure/HomePageFigure";
import Trending from "../../components/trending/Trending";


function Home() {
  return (
    <div className={styles.homeContainer}>
      <HomePageFigure className={styles.HomePageFigure}></HomePageFigure>
      <h1>Trending</h1>
      <Trending></Trending>
    
    </div>
  );
}

export default Home;
