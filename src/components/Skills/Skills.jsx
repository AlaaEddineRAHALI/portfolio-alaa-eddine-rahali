/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import Skil from "../Skil/skil";
import "./skillsStyles.css";

const cardsData = [
  {
    id: 1,
    title: "Front-End",
    info: {
      title1: "HTML5",
      title2: "CSS3",
      title3: "Tailwind",
      title4: "Javascript",
      title5: "React",
    },
  },
  {
    id: 2,
    title: "Back-End",
    info: {
      title1: "NodeJS",
      title2: "Express",
      title3: "Insomnia",
      title4: "PostgresSQL",
      title5: "Sequelize",
    },
  },

  {
    id: 3,
    title: "IDE & Systèmes",
    info: {
      title1: "VScode",
      title2: "GIT",
      title3: "Ubuntu",
      title4: "Windows",
    },
  },
  {
    id: 4,
    title: "Gestion de projet",
    info: {
      title1: "Méthode Agile Scrum",
      title2: "Jira",
      title3: "Gantt",
    },
  },
];
const Skills = () => {
  return (
    <section id="skills" className="px-5 lg:pt-[9%] ">
      <div className=" flex justify-center ">
        <div className="mx-6 max-w-screen-xl pt-[24%] md:py-[22%] md:pt-[30%] lg:py-[2%] 2xl:py-[8%]">
          {/* to introduce my skills*/}
          <div className="px-8 lg:px-0">
            <h1 className="text-3xl font-bold text-white lg:text-center xl:text-4xl 2xl:text-6xl">
              Compétences
            </h1>

            <p className=" text-base text-gray-300 sm:mt-8 sm:text-2xl ">
              Passionné par les nouvelles technologies, J&apos;aime explorer les
              possibilités infinies offertes par les avancées technologiques.
            </p>
          </div>
          {/* to map data's skils*/}
          <div className="mx-22 flex flex-wrap justify-center gap-8 pt-8 lg:mx-0 lg:gap-4">
            {cardsData.map((card) => (
              <Skil cardInfo={card} key={card.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Skills);
