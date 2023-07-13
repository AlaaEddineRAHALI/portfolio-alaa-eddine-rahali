/* eslint-disable react/prop-types */
import React from "react";
import Tilt from "react-parallax-tilt";

function Skil({ cardInfo }) {
  return (
    <Tilt>
      <div className="mx-6 block h-full w-[300px] rounded-xl bg-[#D9D9D9]  p-4 shadow-xl transition hover:border-gray-200/10 hover:shadow-gray-200/10 md:mx-0  lg:w-[220px] 2xl:w-[300px] ">
        <h2 className="mt-4 text-center text-xl font-bold text-[#0172B1] underline underline-offset-8 sm:text-2xl ">
          {cardInfo.title}
        </h2>

        <ol className="skills mt-2 text-center text-base text-[#554A4A]">
          <li className="skills py-1">{cardInfo.info.title1}</li>
          <li className="skills py-1">{cardInfo.info.title2}</li>
          <li className="skills py-1">{cardInfo.info.title3}</li>
          <li className="skills py-1">{cardInfo.info.title4}</li>
          <li className="skills py-1">{cardInfo.info.title5}</li>
        </ol>
      </div>
    </Tilt>
  );
}

export default Skil;
