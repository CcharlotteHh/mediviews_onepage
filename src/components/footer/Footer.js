import React from 'react';
import styles from './footer.module.scss';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
   <footer className={styles.footer}>
    <ul className={styles.footerList}>
     <li> 
     <a href="https://www.instagram.com/mediviews.nl/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}  className={styles.icon}  /></a>
     </li>
     <li> 
     <a href="https://www.instagram.com/mediviews.nl/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook}  className={styles.icon} /></a>
     </li>
     </ul>
   </footer>
  )
}

export default Footer

