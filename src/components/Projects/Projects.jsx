/* eslint-disable tailwindcss/classnames-order */
import React from "react";
import "./projectsStyles.css";
import Tilt from "react-parallax-tilt";
import test from "../../assets/images/11.png";
import portfolio from "../../assets/images/icone/portfolio.jpg";
import syndic from "../../assets/images/OSyndic.jpg";

const Projects = () => {
  return (
    <>
      <section id="projects" className=" px-5 lg:pt-[9%] ">
        <div className="mx-auto max-w-screen-xl pt-[24%] md:pt-[15%] lg:pt-[0%]">
          <h1 className=" pb-2 sm:pb-8 text-3xl font-bold sm:text-6xl px-8 lg:px-0 lg:text-center">
            Réalisations
          </h1>

          <div className="flex flex-wrap gap-8 justify-center">
            <Tilt>
              <article className="flex bg-white rounded-3xl w-[280px] h-full md:w-[440px] lg:w-[400px]">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                  <time
                    dateTime="2022-10-10"
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                  >
                    <span>2022</span>
                    <span className="w-px flex-1 bg-gray-900/10"></span>
                    <span>Nov 11</span>
                  </time>
                </div>
                <div className="flex flex-wrap  ">
                  <div className="w-3/4 sm:block sm:basis-40">
                    <img
                      alt="Icone-Portoflio"
                      src={test}
                      className="aspect-square h-full w-full object-cover flex mx-7 my-2 sm:m-0"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:px-6 pt-6">
                      <h1 className="font-bold uppercase text-gray-900">
                        Actiively
                      </h1>
                      <p className="mt-2 text-sm/relaxed text-gray-700 ">
                        L&apos;application Actiively réunit toutes les activités
                        disponibles dans une zone géographique donnée. Elle
                        offre aux organismes la possibilité de proposer leurs
                        activités tandis que les utilisateurs peuvent aisément
                        trouver une activité correspondant à leurs critères de
                        recherche.
                      </p>
                      <h1 className="font-bold uppercase text-gray-900 pt-8">
                        technologies
                      </h1>
                      <p className=" text-sm/relaxed text-gray-700 py-2 ">
                        <span className=" text-[#FF5733]"># HTML</span>
                        <span className=" text-[#CD6799] leading-6">
                          <br /># SCSS
                        </span>
                        <span className=" text-[#008080] leading-6">
                          <br />
                          #Semantic UI
                        </span>
                        <span className=" text-[#215732] leading-6">
                          <br /># NodeJs
                        </span>
                        <span className=" text-blue-900 leading-6">
                          <br /># PSQL
                        </span>
                        <span className=" text-[#61DBFB] ">
                          <br /># React
                        </span>
                      </p>
                    </div>
                    <div className="flex ">
                      <a
                        href="#"
                        className="block bg-[#0172B1] py-3 pl-2  text-xs font-medium uppercase text-white transition hover:text-black  w-3/4"
                      >
                        Démo Actiively
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </Tilt>
            <Tilt>
              <article className="flex bg-white rounded-3xl w-[280px] h-full md:w-[440px] lg:w-[400px]">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                  <time
                    dateTime="2022-10-10"
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                  >
                    <span>2023</span>
                    <span className="w-px flex-1 bg-gray-900/10"></span>
                    <span>Juin 06</span>
                  </time>
                </div>
                <div className="flex flex-wrap ">
                  <div className="w-3/4 sm:block sm:basis-40">
                    <img
                      alt="Icone-Portoflio"
                      src={portfolio}
                      className="aspect-square h-full w-full object-cover flex mx-7 my-2 sm:m-0"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:px-6 pt-6">
                      <h1 className="font-bold uppercase text-gray-900">
                        Portfolio
                      </h1>
                      <p className="mt-2 text-sm/relaxed text-gray-700 ">
                        À travers les pages de mon portfolio, je souhaite
                        partager avec vous mes réalisations les plus récentes
                        ainsi que mes compétences dans différents domaines.vous
                        trouverez ici un aperçu de mon savoir-faire et de ma
                        passion pour mon métier. N&apos;hésitez pas à explorer
                        mes projets.
                      </p>
                      <h1 className="font-bold uppercase text-gray-900 pt-8">
                        technologies
                      </h1>
                      <p className=" text-sm/relaxed text-gray-700 py-2 ">
                        <span className=" text-[#008080]"># Tailwind</span>
                        <span className=" text-[#61DBFB] leading-6">
                          <br /># React
                        </span>
                      </p>
                    </div>
                    <div className="flex ">
                      <a
                        href="#"
                        className="block bg-[#0172B1] py-3 pl-2  text-xs font-medium uppercase text-white transition hover:text-black  w-3/4"
                      >
                        Démo PortofliO
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </Tilt>
            <Tilt>
              <article className="flex bg-white rounded-3xl w-[280px] h-full md:w-[440px] lg:w-[400px]">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                  <time
                    dateTime="2022-10-10"
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                  >
                    <span>2023</span>
                    <span className="w-px flex-1 bg-gray-900/10"></span>
                    <span>Novem 11</span>
                  </time>
                </div>
                <div className="flex flex-wrap ">
                  <div className="w-3/4 sm:block sm:basis-40">
                    <img
                      alt="Icone-Portoflio"
                      src={syndic}
                      className="aspect-square h-full w-full object-cover flex mx-7 my-2 sm:m-0"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:px-6 pt-6">
                      <h1 className="font-bold uppercase text-gray-900">
                        O&apos;Syndic
                      </h1>
                      <p className="mt-2 text-sm/relaxed text-gray-700 ">
                        O&apos;Syndic est un outil intelligent pour la gestion
                        des copropriétés. Cette application offre aux syndics
                        une optimisation de leurs tâches quotidiennes, dans
                        l&apos;objectif de fournir des prestations à la hauteur
                        des attentes de leurs clients.
                        <span className="text-orange-500  ">
                          <br /> | Site en cours de construciton
                        </span>
                      </p>
                      <h1 className="font-bold uppercase text-gray-900 pt-8">
                        technologies
                      </h1>
                      <p className=" text-sm/relaxed text-gray-700 py-2 ">
                        <span className=" text-[#FF5733]"># HTML</span>
                        <span className=" text-[#CD6799] leading-6">
                          <br /># SCSS
                        </span>
                        <span className=" text-[#008080] leading-6">
                          <br />
                          #Tailwind
                        </span>
                        <span className=" text-[#215732] leading-6">
                          <br /># NodeJs
                        </span>
                        <span className=" text-blue-900 leading-6">
                          <br /># PSQL
                        </span>
                        <span className=" text-[#61DBFB] ">
                          <br /># React
                        </span>
                      </p>
                    </div>
                    <div className="flex ">
                      <a className=" block bg-[#0172B1] py-3 pl-2 text-xs font-medium  uppercase text-white transition hover:text-black  w-3/4">
                        Construction En Cours
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </Tilt>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Projects);
