import React from 'react';
import styles from './trendingCard.module.scss';



function TrendingCard({ img, name, desc,cardBtnTxt, link  }) {
    return (
      
      <div className={styles.trendingCard} >
      <figure className="projectImg">
        <img src={img} alt="projectimg" />
      </figure>
      <div className="desc">
        {<h2>{name}</h2>}
        {<p>{desc}</p>}
        {<button>{cardBtnTxt}</button>}
       
     </div>
      </div>
  
    );
  }

export default TrendingCard
