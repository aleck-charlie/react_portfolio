import React from 'react'

export default function NavBar(changePage, curPage) {
  return (
    <nav className="navbar">
      <h1> Charlie Aleck</h1>
      <div className="links">
        <a
          href="Projects"
          onClick={() => changePage("Projects")}
          className={
            curPage === "Projects" ? "nav-link active" : "nav-link"
          }>
            Projects
            </a>
        <a href="/">Resume</a>
        <a href="/">Contact</a>
      </div>
    </nav>
  )
}
