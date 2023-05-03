/* eslint-disable tailwindcss/classnames-order */
import React from "react";
import "./projectsStyles.css";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className=" bg-black px-5 pt-[10%] pb-[21%] sm:px-20 "
      >
        <p className=" text-3xl font-bold sm:text-6xl ">Réalisations </p>
        <article className="flex bg-white transition hover:shadow-xl m-8 mx-16 mt-16 ">
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

          <div className="hidden sm:block sm:basis-56">
            <img
              alt="Guitar"
              src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold uppercase text-gray-900">Actiively</h3>
              </a>

              <p className="mt-2 text-sm/relaxed text-gray-700">
                La recherche d’une activité sportive ou artistique peut être
                compliquée et qui prend du temps, car il n’y a aucune plateforme
                centralisée. De plus, les associations, pour des raisons
                budgétaires, n’ont pas forcément un site Internet.Actiively est
                la bonne solution pour répondre aux besoins des organismes et
                des utilisateurs, cette application permet aux organismes de
                proposer leurs activités et aux utilisateurs d’avoir une
                plateforme centralisée pour trouver une activitée.
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="#"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                Vers l'application Activvely
              </a>
            </div>
          </div>
        </article>
        <article className="flex bg-white transition hover:shadow-xl m-8 mx-16 mt-24 ">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              dateTime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>2022</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>Oct 10</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <img
              alt="Guitar"
              src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between ">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold uppercase text-gray-900">Portoflio</h3>
              </a>

              <p className="mt-2  text-sm/relaxed text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGRs4dE41F-fQAAAYfjUcKYdHuOLA1MsK9JuZt89tZtGn28Lhirf-IBdtW8zjn2DK2Hzkg8o9h63iUXtA9JuGEeIk62rGyXKwp4e5cu5mALIuSibi3-gg9rl4fbYupGvMb64YA=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Falaa-eddine-rahali%2F"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                Vers Portoflio
              </a>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default React.memo(Projects);
