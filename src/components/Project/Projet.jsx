/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/prop-types */
import React from "react";
import Tilt from "react-parallax-tilt";

function Projet({ projectInfo }) {
  return (
    //  Tilt's animation for one project
    <Tilt>
      <article className="flex h-full w-[280px] rounded-3xl bg-white md:w-[440px] lg:w-[640px] 2xl:w-[400px]">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            dateTime="2022-10-10"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>{projectInfo.year}</span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
            <span>{projectInfo.month}</span>
          </time>
        </div>
        <div className="flex flex-wrap  ">
          <div className="w-3/4 sm:block sm:basis-40">
            <img
              alt="Icone-actiively"
              src={projectInfo.img}
              className="mx-7 my-2 flex aspect-square h-full w-full object-cover sm:m-0"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 pt-6 sm:border-l-transparent sm:px-6">
              <h1 className="font-bold uppercase text-gray-900">
                {projectInfo.title}
              </h1>
              <p className="mt-2 text-sm/relaxed text-gray-700  ">
                {projectInfo.Description}
              </p>
              <h1 className="pt-8 font-bold uppercase text-gray-900">
                technologies
              </h1>
              <p className=" py-2 text-sm/relaxed text-gray-700 ">
                <span className={`text-title1`}>
                  {projectInfo.technologie.title1}
                </span>
                <span className={`text-title2`}>
                  <br /> {projectInfo.technologie.title2}
                </span>
                <span className={`text-title3`}>
                  <br /> {projectInfo.technologie.title3}
                </span>

                <span className={`text-title4`}>
                  <br /> {projectInfo.technologie.title4}
                </span>

                <span className={`text-title5`}>
                  <br /> {projectInfo.technologie.title5}
                </span>
                <span className={`text-title6`}>
                  <br /> {projectInfo.technologie.title6}
                </span>
              </p>
            </div>
            <div className="flex ">
              <a
                href={projectInfo.lien}
                target="_blank"
                rel="noreferrer"
                className="block w-3/4 bg-[#0172B1] py-3  pl-2 text-xs font-medium uppercase text-white transition  hover:text-black"
              >
                {projectInfo.lien_title}
              </a>
            </div>
          </div>
        </div>
      </article>
    </Tilt>
  );
}
export default Projet;
