import React from 'react'


function TrendingCard({ img, title, cardp,cardBtnTxt, link  }) {
    return (
      
      <div className="projectCard">
      <figure className="projectImg">
        <img src={img} alt="projectimg" />
      </figure>
      <div className="desc">
        {<h2>{title}</h2>}
        {<p>{cardp}</p>}
       
     </div>
      </div>
  
    );
  }

export default TrendingCard
