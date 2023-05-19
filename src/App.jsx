import React from "react";
import Nav from "./components/SectionNav/Nav";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Experiences from "./components/Experiences/Experiences";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-black">
      <div className="bg-header-pattern  bg-cover bg-center bg-no-repeat">
        <Nav />
        <AboutMe />
      </div>
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
