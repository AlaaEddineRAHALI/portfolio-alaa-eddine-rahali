import React from "react";
import Tilt from "react-parallax-tilt";
import "./skillsStyles.css";

const Skills = () => {
  return (
    <section id="skills" className="px-5 lg:pt-[9%] ">
      <div className=" flex justify-center ">
        <div className="mx-6 max-w-screen-xl pb-[28%] pt-[24%] md:pt-[28%] lg:pt-[0%] lg:pb-[0%]">
          <div className="px-8">
            <h1 className="text-3xl font-bold text-white sm:text-6xl lg:text-center">
              Compétences
            </h1>

            <p className=" text-base text-gray-300 sm:mt-8 sm:text-2xl ">
              Passionné par les nouvelles technologies, J&apos;aime explorer les
              possibilités infinies offertes par les avancées technologiques.
            </p>
          </div>

          <div className=" mx-22 flex flex-wrap justify-center gap-8 pt-8 lg:mx-40 lg:gap-8">
            <Tilt>
              <div className="mx-6 block h-full w-[300px] rounded-xl  bg-[#D9D9D9] p-4 shadow-xl transition hover:border-gray-200/10  hover:shadow-gray-200/10 md:mx-0 ">
                <h2 className="mt-4 text-center text-xl font-bold text-[#0172B1] underline underline-offset-8 sm:text-2xl ">
                  Développement Backend
                </h2>

                <ol className="skills mt-2 text-base text-[#554A4A]">
                  <li className="skills py-1">NodeJS</li>
                  <li className="skills py-1">Express</li>
                  <li className="skills py-1">Insomnia</li>
                  <li className="skills py-1">PostgresSQL</li>
                  <li className="skills py-1">Sequelize</li>
                </ol>
              </div>
            </Tilt>
            <Tilt>
              <div className="mx-6 block h-full w-[300px] rounded-xl  bg-[#D9D9D9] p-4 shadow-xl transition hover:border-gray-200/10  hover:shadow-gray-200/10 md:mx-0 ">
                <h2 className="mt-4 text-center text-xl font-bold text-[#0172B1] underline underline-offset-8 sm:text-2xl ">
                  Développement FrontEnd
                </h2>

                <ol className="skills mt-2 text-base text-[#554A4A]">
                  <li className="skills py-1">HTML5</li>
                  <li className="skills py-1">CSS3</li>
                  <li className="skills py-1">Tailwind</li>
                  <li className="skills py-1">Javascript</li>
                  <li className="skills py-1">React</li>
                </ol>
              </div>
            </Tilt>
            <Tilt>
              <div className="mx-6 block h-full w-[300px] rounded-xl  bg-[#D9D9D9] p-4 shadow-xl transition hover:border-gray-200/10  hover:shadow-gray-200/10 md:mx-0 ">
                <h2 className="mt-4 text-center text-xl font-bold text-[#0172B1] underline underline-offset-8 sm:text-2xl ">
                  Environnement & Systèmes d&apos;exploitation
                </h2>

                <ol className="skills mt-2 text-base text-[#554A4A]">
                  <li className="skills py-1">VScode</li>
                  <li className="skills py-1">GIT</li>
                  <li className="skills py-1">Ubuntu</li>
                  <li className="skills py-1">Windows</li>
                </ol>
              </div>
            </Tilt>
            <Tilt>
              <div className="mx-6 block h-full w-[300px]  rounded-xl bg-[#D9D9D9] p-4 shadow-xl transition  hover:border-gray-200/10 hover:shadow-gray-200/10 md:mx-0">
                <h2 className="mt-4 text-center text-xl font-bold text-[#0172B1] underline underline-offset-8 sm:text-2xl ">
                  Gestion de projet
                </h2>

                <ol className="skills mt-2 text-base text-[#554A4A]">
                  <li className="skills py-1">Méthode Agile Scrum</li>
                  <li className="skills py-1">JIRA</li>
                  <li className="skills py-1">GANTT</li>
                </ol>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Skills);
