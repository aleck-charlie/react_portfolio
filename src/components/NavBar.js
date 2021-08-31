import React from 'react';
import { Router, Link } from 'react-router-dom';

export default function NavBar({changePage, curPage}) {
  return (
    <Router>
    <nav className="navbar">
      <h1> Charlie Aleck</h1>
      <div className="links">
        <Link to="Projects"
          onClick={() => changePage("Projects")}
          className={curPage === "Projects" ? "nav-link active" : "nav-link"
          }/>Projects
        <a href="/">Resume</a>
        <a href="/">Contact</a>
      </div>
    </nav>
    </Router>
  )
}
