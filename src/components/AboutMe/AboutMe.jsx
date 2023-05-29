import React from "react";
import alaaeddine_profil from "../../assets/images/alaaeddine_profil.jpg";
import "./aboutMeStyles.css";

const AboutMe = () => {
  return (
    <section id="about" className="px-5 lg:pt-[6%] 2xl:pt-[9%] ">
      <div className="pb-[60%] pt-20 md:pb-[35%] md:pt-[30%] lg:pb-[23%] lg:pt-[0%]">
        <div className="flex flex-col items-center ">
          {/* to introduce my profil's image*/}
          <div className="card h-56 w-44 md:h-80 md:w-64 xl:h-48 xl:w-36 2xl:h-80 2xl:w-64">
            <div className="imgBx">
              <img src={alaaeddine_profil} alt="image_profil"></img>
            </div>
          </div>
          {/* to introduce myself*/}
          <h1 className="mb-2 mt-8 text-center text-xl md:text-2xl 2xl:text-3xl">
            Bonjour, je suis
            <span className=" text-3xl md:text-4xl 2xl:text-7xl ">
              <br />
              Alaa Eddine
            </span>
          </h1>
          <div className=" my-2 h-full rounded-md bg-white px-8 py-4 text-center opacity-[50%] lg:my-4">
            <p className=" text-base text-[#0172B1] contrast-200 md:text-3xl lg:text-2xl 2xl:text-3xl ">
              Ingénieur Consultant <br />
              Développeur Junior Full stack JS / React - UI/UX
            </p>
          </div>
          {/* for download resume*/}
          <a
            className={
              " mt-4 rounded-full bg-[#0172B1] p-3 px-6 text-xs hover:text-black sm:text-base lg:mt-3 "
            }
            href="../../../cv_alaaeddine.pdf"
            download
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutMe);
