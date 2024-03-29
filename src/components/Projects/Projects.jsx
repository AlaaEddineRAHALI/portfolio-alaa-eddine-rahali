/* eslint-disable tailwindcss/classnames-order */
import React from "react";
import actiively_img from "../../assets/images/actiively_img.png";
import portfolio_img from "../../assets/images/portfolio_img.jpg";
import syndic_img from "../../assets/images/syndic_img.jpg";
import dentist_img from "../../assets/images/dentist_img.png";
import Projet from "../Project/Projet";

const projectInfo = [
  {
    id: 1,
    year: "2022",
    month: "Nov 11",
    img: actiively_img,
    title: "Actiively",
    Description:
      "L'application Actiively réunit toutes les activités disponibles dans une zone géographique donnée. Elle offre aux organismes la possibilité de proposer leurs activités tandis que les utilisateurs peuvent aisément trouver une activité correspondant à leurs critères de recherche.",
    technologie: {
      title1: "# SCSS",
      title2: "# React",
      title3: "# NodeJs",
      title4: "# PSQL",
      title5: "# HTML",
      title6: "# Semantic UI",
    },
    lien: "https://actiively.onrender.com/",
    lien_title: "Découvrir Actiively",
  },
  {
    id: 2,
    year: "2023",
    month: "Jui 06",
    img: portfolio_img,
    title: "Portfolio",
    Description:
      "À travers les pages de mon portfolio, je souhaite partager avec vous mes réalisations les plus récentes ainsi que mes compétences dans différents domaines. vous trouverez ici un aperçu de mon savoir-faire et de ma passion pour mon métier. N'hésitez pas à explorer mes projets.",
    technologie: {
      title1: "# Tailwind",
      title2: "# React",
      title3: "# CSS",
    },
    lien: "https://alaa-eddine-rahali-portfolio.netlify.app/",
    lien_title: "Découvrir Portfolio",
  },
  {
    id: 3,
    year: "2023",
    month: "Juill 07",
    img: dentist_img,
    title: "WhiteTeeth",
    Description:
      "WhiteTeeth est un site d'un cabinet dentaire. Ce site a été spécialement conçu pour simplifier les procédures administratives et offrir une expérience optimale aux patients. Avec WhiteTeeth, vous pouvez gérer efficacement toutes les tâches administratives de votre cabinet.",
    technologie: {
      title1: "# WordPress",
    },
    lien: "https://whiteteeth.great-site.net/",
    lien_title: "Découvrir WhiteTeeth",
  },
  {
    id: 4,
    year: "2023",
    month: "Juill 07",
    img: syndic_img,
    title: "O'Syndic",
    Description:
      "O'Syndic est un outil intelligent pour la gestion des copropriétés. Cette application offre aux syndics une optimisation de leurs tâches quotidiennes, dans l'objectif de fournir des prestations à la hauteur des attentes de leurs clients.",
    technologie: {
      title1: " #Tailwind",
      title2: "# React",
      title3: "# NodeJs",
      title4: "# MySQL",
    },
    lien: "https://player.vimeo.com/video/844603359?h=7de1749412",
    lien_title: "Vidéo O'syndic V1",
  },
];

const Projects = () => {
  return (
    <>
      <section id="projects" className=" px-5 lg:pt-[6%] 2xl:pt-[9%]">
        <div className="mx-auto max-w-screen-xl pt-[24%] md:pt-[15%] lg:pt-[0%]">
          <h1 className="pb-2 sm:pb-4 2xl:pb-8 text-3xl font-bold xl:text-4xl 2xl:text-6xl px-8 lg:px-0 lg:text-center">
            Réalisations
          </h1>
          <div className="flex flex-wrap gap-8 justify-center 2xl:justify-start ">
            {/*To map data's projectInfo*/}
            {projectInfo.map((card) => (
              <Projet projectInfo={card} key={card.id} color={card.color} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Projects);
