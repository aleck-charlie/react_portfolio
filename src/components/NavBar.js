import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default function NavBar({ changePage, curPage }) {
  return (
    <BrowserRouter>
      <Route>
        <nav className="navbar">
          <h1> Charlie Aleck</h1>
          <div className="links">
            <Link to="Projects"
              onClick={() => changePage("Projects")}
              className={curPage === "Projects" ? "nav-link active" : "nav-link"
              }>Projects</Link>
            <a href="/">Resume</a>
            <a href="/">Contact</a>
          </div>
        </nav>
      </Route>
    </BrowserRouter>
  )
}
