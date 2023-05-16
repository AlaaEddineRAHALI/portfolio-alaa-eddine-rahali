/* eslint-disable tailwindcss/classnames-order */
import React from "react";
import "./projectsStyles.css";
import Tilt from "react-parallax-tilt";
import portofolio from "../../assets/images/icone/portofolio.png";

const Projects = () => {
  return (
    <>
      <section id="projects" className="  px-5 py-[20%] sm:px-20 sm:py-[13%] ">
        <h2 className=" mt-2 pb-4 text-3xl font-bold sm:text-6xl">
          Réalisations
        </h2>

        <div className="flex flex-row justify-start sm:items-center">
          <Tilt>
            <article className="flex bg-white transition hover:shadow-xl w-[100%] h-full  rounded-3xl lg:w-[29%] md:w-[70%]">
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
              <div className="flex flex-wrap">
                <div className="w-3/4 sm:block sm:basis-56">
                  <img
                    alt="Icone-Portoflio"
                    src={portofolio}
                    className="aspect-square h-full w-full object-cover flex mx-7 my-2 sm:mx-0 sm:my-0"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="#">
                      <h3 className="font-bold uppercase text-gray-900">
                        Actiively
                      </h3>
                    </a>

                    <p className="mt-2 text-sm/relaxed text-gray-700 ">
                      la premiere Aucune plateforme centralise les activités
                      disponibles dans une zone géographique, de plus, les
                      associations, pour des raisons budgétaires, n’ont pas
                      forcément un site Internet.Actiively est une application
                      qui permet aux organismes de proposer leurs activités et
                      aux utilisateurs d’avoir une plateforme centralisée pour
                      trouver une activitée.
                    </p>
                  </div>

                  <div className="sm:flex mb-2 ">
                    <a
                      href="#"
                      className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400 w-3/4"
                    >
                      Démo Portoflio
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </Tilt>
          <Tilt>
            <article className="flex bg-white transition hover:shadow-xl  w-[100%] h-full  rounded-3xl lg:w-[29%] md:w-[70%]">
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
              <div className="flex flex-wrap">
                <div className="w-3/4 sm:block sm:basis-56">
                  <img
                    alt="Icone-Portoflio"
                    src={portofolio}
                    className="aspect-square h-full w-full object-cover flex mx-7 my-2 sm:mx-0 sm:my-0"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="#">
                      <h3 className="font-bold uppercase text-gray-900">
                        Portoflio
                      </h3>
                    </a>

                    <p className="mt-2 text-sm/relaxed text-gray-700 ">
                      la premiere Aucune plateforme centralise les activités
                      disponibles dans une zone géographique, de plus, les
                      associations, pour des raisons budgétaires, n’ont pas
                      forcément un site Internet.Actiively est une application
                      qui permet aux organismes de proposer leurs activités et
                      aux utilisateurs d’avoir une plateforme centralisée pour
                      trouver une activitée.
                    </p>
                  </div>

                  <div className="sm:flex mb-2 ">
                    <a
                      href="#"
                      className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400 w-3/4"
                    >
                      Démo Portoflio
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </Tilt>
          <Tilt>
            <article className="flex bg-white transition hover:shadow-xl   w-[100%] h-full  rounded-3xl lg:w-[29%] md:w-[70%]">
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
              <div className="flex flex-wrap">
                <div className="w-3/4 sm:block sm:basis-56">
                  <img
                    alt="Icone-Portoflio"
                    src={portofolio}
                    className="aspect-square h-full w-full object-cover flex mx-7 my-2 sm:mx-0 sm:my-0"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="#">
                      <h3 className="font-bold uppercase text-gray-900">
                        project en cours
                      </h3>
                    </a>

                    <p className="mt-2 text-sm/relaxed text-gray-700 ">
                      la premiere Aucune plateforme centralise les activités
                      disponibles dans une zone géographique, de plus, les
                      associations, pour des raisons budgétaires, n’ont pas
                      forcément un site Internet.Actiively est une application
                      qui permet aux organismes de proposer leurs activités et
                      aux utilisateurs d’avoir une plateforme centralisée pour
                      trouver une activitée.
                    </p>
                  </div>

                  <div className="sm:flex mb-2 ">
                    <a
                      href="#"
                      className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400 w-3/4"
                    >
                      Démo Portoflio
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </Tilt>
        </div>
      </section>
    </>
  );
};

export default React.memo(Projects);
