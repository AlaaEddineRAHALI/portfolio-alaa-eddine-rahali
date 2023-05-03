import React from "react";
import "./aboutMeStyles.css";

const AboutMe = () => {
  return (
    <section id="about" className=" bg-black  px-5 sm:px-20 ">
      <h2 className="mt-6 pb-4 text-3xl font-bold sm:text-6xl">Compétences</h2>
      <h2>Développeur Front-End</h2>
      <p>
        Bienvenue sur mon portfolio !Après huit années d&apos;expérience dans
        l&apos;ingénierie industrielle, j&apos;ai décidé d&apos;entamer une
        reconversion professionnelle. Aujourd&apos;hui, je suis dévloppeur
        Fullstack Javascript. Bien que j&apos;utilise React, mais j&apos;ai soif
        d&apos;apprendre d&apos;autres technologies. Mobile et basé en
        Île-de-France, je suis disponible pour collaborer sur des projets
        passionnants.
      </p>
      ABOUT
    </section>
  );
};

export default React.memo(AboutMe);
