import React from 'react';
import TrendingCard from '../trendingcard/TrendingCard';
import styles from './trending.module.scss';
import Placeholder from '../../assets/img/placeholder.jpg'

function Trending({title}) {
  return (
    
      <section className={styles.trendingContainer}>
        <div className={styles.trendingCardContainer}>
            <TrendingCard
        img={Placeholder}
        name="Amber"
        desc='“Mijn leven, mijn wereld en alles waar ik voor
        leefde, stortte in”'
        cardBtnTxt="Lees meer"
        link="#"

        ></TrendingCard>     <TrendingCard
        img={Placeholder}
        name="Amber"
        desc='“Mijn leven, mijn wereld en alles waar ik voor
        leefde, stortte in”'
        cardBtnTxt="Lees meer"
        link="#"
        

        ></TrendingCard>     <TrendingCard
        img={Placeholder}
        name="Amber"
        desc='“Mijn leven, mijn wereld en alles waar ik voor
        leefde, stortte in”'
        cardBtnTxt="Lees meer"
        link="#"
        

        ></TrendingCard>     <TrendingCard
        img={Placeholder}
        name="Amber"
        desc='“Mijn leven, mijn wereld en alles waar ik voor
        leefde, stortte in”'
        cardBtnTxt="Lees meer"
        link="#"
        

        ></TrendingCard>     <TrendingCard
        img={Placeholder}
        name="Amber"
        desc='“Mijn leven, mijn wereld en alles waar ik voor
        leefde, stortte in”'
        cardBtnTxt="Lees meer"
        link="#"
        

        ></TrendingCard>
        <TrendingCard
        img={Placeholder}
        name="Amber"
        desc='“Mijn leven, mijn wereld en alles waar ik voor
        leefde, stortte in”'
        cardBtnTxt="Lees meer"
        link="#"
        

        ></TrendingCard>
        </div>
     
      </section>
    
  )
}

export default Trending
