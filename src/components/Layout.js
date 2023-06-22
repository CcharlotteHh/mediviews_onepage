import React from "react";
import Nav from "./nav/Nav";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import styles from './layout.module.scss';


function Layout() {
  return (
    <div className={styles.layout}>
      <Nav></Nav>
  
      <Footer></Footer>
    </div>
  );
}

export default Layout;
