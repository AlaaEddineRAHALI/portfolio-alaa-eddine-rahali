import React from "react";
import alaaeddine from "../../assets/images/alaaeddine.jpg";
import "./aboutMeStyles.css";

const AboutMe = () => {
  return (
    <section id="about" className="  px-5 lg:pt-[9%] ">
      <div className="pb-[45%] pt-[60%] md:pb-[35%] md:pt-[30%] lg:pb-[20%] lg:pt-[0%]">
        <div className="flex flex-col items-center ">
          <div className="card h-56 w-44 sm:h-80 sm:w-64">
            <div className="imgBx">
              <img src={alaaeddine} alt="image_profil"></img>
            </div>
          </div>
          <h1 className="mb-2 mt-8 text-center text-xl sm:text-3xl">
            Bonjour, je suis
            <span className=" text-3xl sm:text-7xl">
              <br />
              Alaa Eddine
            </span>
          </h1>

          <div className=" my-2 h-full rounded-md bg-white px-8 py-4 text-center opacity-[50%] lg:my-4">
            <p className=" text-base text-[#0172B1] contrast-200 sm:text-3xl ">
              Ingénieur Consultant <br />
              Développeur Junior Full stack JS - UI/UX
            </p>
          </div>

          <a
            className={
              " mt-4 rounded-full bg-[#0172B1] p-3 px-6 text-xs hover:text-black sm:text-base lg:mt-3 "
            }
            href="/cv_alaaeddine.pdf"
            target="_blank"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutMe);
