import React from "react";
import Tilt from "react-parallax-tilt";
import "./skillsStyles.css";

const Skills = () => {
  return (
    <section id="skills" className=" bg-black px-5 sm:px-20 lg:pt-[9%] ">
      <div className="text-white ">
        <div className="mx-auto max-w-screen-xl">
          <div className="   ">
            <h2 className="text-3xl font-bold sm:pb-5 sm:text-6xl">
              Compétences
            </h2>

            <p className="mt-8  text-base text-gray-300 sm:text-2xl ">
              Passionné par les nouvelles technologies, je suis constamment en
              quête d&apos;amélioration de mes compétences techniques et de mon
              savoir-faire
            </p>
          </div>

          <div className="mx-5 mt-8 grid grid-cols-1 gap-10 sm:mx-1 md:grid-cols-3 lg:grid-cols-3  ">
            <Tilt>
              <div className=" mx-6 block h-full w-5/6 rounded-xl  bg-[#D9D9D9] p-8 shadow-xl transition hover:border-gray-200/10  hover:shadow-gray-200/10 md:mx-0 md:w-full lg:w-full">
                <h2 className="mt-4 text-center text-2xl font-bold text-[#0172B1] underline underline-offset-8 sm:text-2xl ">
                  Développement Backend
                </h2>

                <ol className="skills mt-4 text-base text-[#554A4A]">
                  <li className="skills py-1">NodeJS</li>
                  <li className="skills py-1">Express</li>
                  <li className="skills py-1">Insomnia</li>
                  <li className="skills py-1">PostgresSQL</li>
                  <li className="skills py-1">Sequelize</li>
                </ol>
              </div>
            </Tilt>
            <Tilt>
              <div className="   block h-full rounded-xl bg-[#D9D9D9] mx-6  md:mx-0 p-8 shadow-xl transition hover:border-gray-200/10  hover:shadow-gray-200/10 w-5/6 md:w-full lg:w-full">
                <h2 className="mt-4 text-center text-2xl font-bold text-[#0172B1] underline underline-offset-8 ">
                  Développement FrontEnd
                </h2>

                <ol className="skills mt-4 text-base text-[#554A4A]">
                  <li className="skills py-1">HTML5</li>
                  <li className="skills py-1">CSS3</li>
                  <li className="skills py-1">Javascript</li>
                  <li className="skills py-1">React</li>
                </ol>
              </div>
            </Tilt>
            <Tilt>
              <div className="   block h-full rounded-xl bg-[#D9D9D9] mx-6  md:mx-0 p-8 shadow-xl transition hover:border-gray-200/10  hover:shadow-gray-200/10 w-5/6 md:w-full lg:w-full">
                <h2 className="mt-4 text-center text-2xl font-bold text-[#0172B1] underline underline-offset-8">
                  Gestion de projet
                </h2>

                <ol className="skills mt-4 text-base text-[#554A4A]">
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
