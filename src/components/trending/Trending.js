import React from 'react';
import TrendingCard from '../trendingcard/TrendingCard';
import styles from './trending.module.scss';

function Trending({title}) {
  return (
    
      <section className={styles.trendingCardContainer}>
        <TrendingCard
        name="name"
        desc='desc'

        ></TrendingCard>
         <TrendingCard
        name="name"
        desc='desc'

        ></TrendingCard>
      </section>
    
  )
}

export default Trending
