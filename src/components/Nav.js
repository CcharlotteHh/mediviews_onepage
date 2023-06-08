import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

function Nav() {
  return (
    <Router>
    <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
        Home
        </Link>
        <Link to="/contact" style={{ padding: 5 }}>
        Contact
        </Link>
        <Link to="/instagram" style={{ padding: 5 }}>
        Instagram
        </Link>
    </nav>

    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  )
}

export default Nav
