import React from "react";

function Navbar({ get, page }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={`navbar-link ${page === "about" ? "active" : ""}`}
            data-nav-link
            onClick={() => get("about")}
          >
            About
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={`navbar-link ${page === "resume" ? "active" : ""}`}
            data-nav-link
            onClick={() => get("resume")}
          >
            Resume
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${page === "Skill" ? "active" : ""}`}
            data-nav-link
            onClick={() => get("Skill")}
          >
            Skill
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={`navbar-link ${page === "project" ? "active" : ""}`}
            data-nav-link
            onClick={() => get("project")}
          >
            Project
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={`navbar-link ${page === "contact" ? "active" : ""}`}
            data-nav-link
            onClick={() => get("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
