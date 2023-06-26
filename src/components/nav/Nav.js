import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/home/Home";
import Overons from "../../pages/home/overons/Overons";
import { useState } from "react";
import Contact from "../../pages/Contact";
import styles from "./nav.module.scss";
import Logo from "../../assets/img/logo.png";
import Hamburger from "../hamburger/Hamburger";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isGreen, setIsGreen] = useState(false);
  const [isnNotDisplay, setIsNotDisplay] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
    setIsGreen(!isGreen);
    setIsNotDisplay(!isnNotDisplay);


   
  }
  return (
    <Router>
      <nav className={`${styles.nav} ${isGreen ? styles.green : ""} `}>
        <div className={styles.navbar} >

        

          <Link className={styles.logoLink} to="/">
            <img className={styles.logo} src={Logo} alt="logo" />
          </Link>
          <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
            <li className={styles.navLink}>
              <Link to="/contact">Contact</Link>
            </li>
            <li className={styles.navLink}>
              <Link to="/overons" className={styles.navLink}>
               Over Ons
              </Link>
            </li>
            <li className={styles.navLink}>
              <Link to="/instagram" className={styles.navLink}>
                Instagram
              </Link>
            </li>
          </ul>
          <div className="hamburger" onClick={toggleMenu}>
            <Hamburger></Hamburger>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/overons" element={<Overons />} />
      </Routes>
    </Router>
  );
}

export default Nav;
