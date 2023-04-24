import React from "react";
import { useActiveMenu } from "react-active-menu";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Experiences from "../Experiences/Experiences";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import "./sectionStyles.css";

const SectionNav = () => {
  const { registerSection, registerTrigger } = useActiveMenu({
    offset: 60,
    smooth: true,
  });

  return (
    <>
      <nav className="triggers">
        <ul>
          <li>
            <button ref={registerTrigger("section-1")} type="button">
              Accueil
            </button>
          </li>
          <li>
            <button ref={registerTrigger("section-2")} type="button">
              Compétences
            </button>
          </li>
          <li>
            <button ref={registerTrigger("section-3")} type="button">
              Expériences
            </button>
          </li>
          <li>
            <button ref={registerTrigger("section-4")} type="button">
              Réalisation
            </button>
          </li>
          <li>
            <button ref={registerTrigger("section-5")} type="button">
              Contact
            </button>
          </li>
          <li>
            <a href="https://github.com/AlaaEddineRAHALI">GIT</a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/alaa-eddine-rahali/">
              Linkedin
            </a>
          </li>
        </ul>
      </nav>
      <div className="sections">
        <section ref={registerSection("section-1")}>
          <AboutMe />
        </section>
        <section ref={registerSection("section-2")}>
          <Skills />
        </section>
        <section ref={registerSection("section-3")}>
          <Experiences />
        </section>
        <section ref={registerSection("section-4")}>
          <Projects />
        </section>
        <section ref={registerSection("section-5")}>
          <Contact />
        </section>
      </div>
    </>
  );
};

export default React.memo(SectionNav);
