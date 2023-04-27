import React from "react";

import "./sectionStyles.css";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="nav__container">
      <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="about">
                ACCEUIL
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="skills">
                COMPETENCES
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="experiences">
                EXPÉREINCES
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="projects">
                RÉALISATIONS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default React.memo(Nav);
