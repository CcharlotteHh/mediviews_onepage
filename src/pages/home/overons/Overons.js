import React from "react";
import styles from "./overons.module.scss";
import overonsImg from '../../../assets/img/overonsimg.jpg'

function Overons() {
  return (
    <div className={styles.overons_container}>
        <h1>Over ons</h1>
      <div className={styles.img_text_container}>
      <div className={styles.desc_over_ons}>
        <h2>Hoe MediViews is ontstaan</h2>
        <p>
        
          De medische wereld heb ik altijd al interessant gevonden en heeft
          altijd mijn aandacht getrokken. Films, boeken, series, tv-progamma’s
          en verhalen van mensen uit mijn omgeving vind ik allemaal heel
          interessant. Ik vind het fascinerend hoe het lichaam werkt en ik vind
          het interessant om te weten hoe bepaalde ziektebeelden tot stand komen
          en hoe deze voorkomen en genezen kunnen worden. Om nog meer over de
          medische wereld te weten te komen, zoek ik informatie over medische
          onderwerpen, beroepen en aandoeningen. Ook interview ik mensen met een
          aandoening, om ook meer inzicht te krijgen in de impact dat het heeft
          op iemands leven en interview ik hulpverleners om meer te weten te
          komen over wat hun beroep inhoudt. Met MediViews wil ik een platform
          creëren met informatie, feitjes, aandoeningen en interviews over
          medische onderwerpen. Ik wil dat MediViews een platform is voor zowel
          mensen met medische kennis, als mensen zonder (veel) medische kennis.
        </p>
      </div>
      <figure className={styles.overons_figure}>
        <img src={overonsImg} alt="over_ons_img"></img>
      </figure>
      </div>
    </div>
  );
}

export default Overons;
