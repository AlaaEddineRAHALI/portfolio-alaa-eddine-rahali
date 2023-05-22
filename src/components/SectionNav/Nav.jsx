import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import Burger from "../Burger/Burger";
import "./sectionStyles.css";

const Nav = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(true);

  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <div className="nav__container  ">
      <header className="nav">
        <nav className="nav__container__actions">
          <ul
            className={`appheader  ${
              isBurgerOpen ? "appheader-navbar-open" : "appheader-navbar-closed"
            }`}
          >
            <li>
              <Link
                onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                activeClass="active"
                smooth
                spy
                to="about"
              >
                ACCEUIL
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                activeClass="active"
                smooth
                spy
                to="skills"
              >
                COMPETENCES
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                activeClass="active"
                smooth
                spy
                to="experiences"
              >
                EXPÉREINCES
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                activeClass="active"
                smooth
                spy
                to="projects"
              >
                RÉALISATIONS
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                activeClass="active"
                smooth
                spy
                to="contact"
              >
                CONTACT
              </Link>
            </li>
          </ul>
          <button type="button" onClick={toggleBurger} className={" mx-4 "}>
            {<Burger />}
          </button>
        </nav>
      </header>
    </div>
  );
};

export default React.memo(Nav);
