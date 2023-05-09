import React from "react";
import "./skillsStyles.css";

const Skills = () => {
  return (
    <section
      id="skills"
      className=" bg-black px-5  py-[15%] sm:px-2 md:py-[6%]  md:pb-[42%] lg:py-[05%] lg:pb-[8%]"
    >
      <div className="  text-white ">
        <div className="mx-auto  max-w-screen-xl px-4  sm:px-6 sm:py-12 md:px-11 lg:px-8 ">
          <div className=" text-left  ">
            <h2 className="mt-6 pb-4 text-3xl font-bold sm:text-6xl">
              Compétences
            </h2>

            <p className="mt-8  text-xl text-gray-300">
              Passionné par les nouvelles technologies, je suis constamment en
              quête d&apos;amélioration de mes compétences techniques et de mon
              savoir-faire
            </p>
          </div>

          <div className="mx-5 mt-8 grid grid-cols-1 gap-10 sm:mx-1 md:grid-cols-3 lg:grid-cols-3  ">
            <div className="   block h-full rounded-xl bg-[#D9D9D9] p-8 shadow-xl transition hover:border-gray-200/10  hover:shadow-gray-200/10 md:w-full lg:w-full">
              <h2 className="mt-4 text-center text-2xl font-bold text-[#0172B1] underline underline-offset-8 sm:text-2xl ">
                Développement Backend
              </h2>

              <ol className="skills mt-4 text-xl text-[#554A4A]">
                <li className="skills py-1">NodeJS</li>
                <li className="skills py-1">Express</li>
                <li className="skills py-1">Insomnia</li>
                <li className="skills py-1">PostgresSQL</li>
                <li className="skills py-1">Sequelize</li>
              </ol>
            </div>
            <div className="   block h-full rounded-xl bg-[#D9D9D9] p-8 shadow-xl transition hover:border-gray-200/10  hover:shadow-gray-200/10 md:w-full lg:w-full">
              <h2 className="mt-4 text-center text-2xl font-bold text-[#0172B1] underline underline-offset-8 ">
                Développement FrontEnd
              </h2>

              <ol className="skills mt-4 text-xl text-[#554A4A]">
                <li className="skills py-1">HTML5</li>
                <li className="skills py-1">CSS3</li>
                <li className="skills py-1">Javascript</li>
                <li className="skills py-1">React</li>
              </ol>
            </div>
            <div className="   block h-full rounded-xl bg-[#D9D9D9] p-8 shadow-xl transition hover:border-gray-200/10  hover:shadow-gray-200/10 md:w-full lg:w-full">
              <h2 className="mt-4 text-center text-2xl font-bold text-[#0172B1] underline underline-offset-8">
                Gestion de projet
              </h2>

              <ol className="skills mt-4 text-xl text-[#554A4A]">
                <li className="skills py-1">Méthode Agile Scrum</li>
                <li className="skills py-1">JIRA</li>
                <li className="skills py-1">GANTT</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Skills);
