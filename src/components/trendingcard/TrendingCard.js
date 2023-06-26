import React from 'react';
import styles from './trendingCard.module.scss';



function TrendingCard({ img, name, desc,cardBtnTxt, link  }) {
    return (
      
      <div className={styles.trendingCard} >
      <figure className={styles.figure}>
        <img src={img} alt="projectimg" />
      </figure>
      <div className={styles.desc}>
        {<h2 className={styles.author}>{name}</h2>}
        {<p className={styles.desc}>{desc}</p>}
        {<a className={styles.prBtn}href={link}  target="_blank"  rel="noreferrer">{cardBtnTxt}</a>}
       
     </div>
      </div>
  
    );
  }

export default TrendingCard
