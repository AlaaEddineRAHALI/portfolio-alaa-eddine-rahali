import React from "react";
import "./aboutMeStyles.css";
import alaaeddine from "../../assets/images/alaaeddine.png";

const AboutMe = () => {
  return (
    <section id="about" className=" px-5 lg:pt-[9%]">
      <div className="py-[54%] sm:py-[30%] lg:py-[2.5%]">
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

          <div className=" my-2  h-full rounded-md bg-white px-8 py-4 text-center opacity-[50%] lg:my-4">
            <p className=" text-base text-[#0172B1] contrast-200 sm:text-3xl ">
              Ingénieur Consultant
              <span className=" text- text-[#0172B1] contrast-200 sm:text-3xl ">
                <br />
                Développeur Junior Full stack JS - UI/UX
              </span>
            </p>
          </div>

          <a
            className={
              "  mt-4 rounded-full bg-[#0172B1] p-3 px-6 text-base  hover:text-black lg:mt-3 "
            }
            href="../cv_alaaeddine.pdf"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutMe);
