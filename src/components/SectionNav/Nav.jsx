import React, { useState } from "react";
import { Link } from "react-scroll";
import Burger from "../Burger/Burger";
import logo_website from "../../assets/images/logo_website.png";
import linkedin from "../../assets/images/icone/linkedin-logo.png";
import github from "../../assets/images/icone/github-logo.png";
import "./sectionStyles.css";

const Nav = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(true);

  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <div className="nav__container ">
      <header className="nav h-[60px] sm:h-[70px] ">
        <div className="flex justify-center">
          <a>
            <img
              src={logo_website}
              alt="logo"
              className="ml-4 mt-1 h-12 w-12 object-contain sm:ml-12 sm:h-16 sm:w-16 "
            />
          </a>
        </div>
        <nav className="nav__container__actions  flex flex-row-reverse items-center md:flex-row">
          <ul
            className={`appheader gap-6 ${
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
                ACCUEIL
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
                COMPÉTENCES
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
                EXPÉRIENCES
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
          {/*To manage githup & linkedin's URL*/}
          <a
            href="https://github.com/AlaaEddineRAHALI"
            className="block shrink-0 p-1"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="Man"
              src={github}
              className="h-9 w-9 rounded-full object-cover"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/alaa-eddine-rahali/"
            target="_blank"
            className="block shrink-0 p-1"
            rel="noreferrer"
          >
            <img
              alt="Man"
              src={linkedin}
              className="mx-1 h-9 w-9 rounded-full object-cover lg:mr-5"
            />
          </a>
        </nav>
      </header>
    </div>
  );
};

export default React.memo(Nav);
