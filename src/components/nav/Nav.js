import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Contact from '../../pages/Contact';
import styles from './nav.module.scss';
import Logo from '../../assets/img/logo.png';
import Hamburger from '../hamburger/Hamburger';

function Nav() {
  return (
    <Router>
    <nav  className={styles.navbar}
>
        <Link className={styles.logoLink} to="/" >
        <img className={styles.logo}src={Logo} alt='logo'/>
        </Link>
        <ul className={styles.navLinks}>
        <Link to="/contact" >
        Contact
        </Link>
        <Link to="/instagram" >
        Instagram
        </Link>
        </ul>
        <Hamburger></Hamburger>
    </nav>

    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  )
}

export default Nav
