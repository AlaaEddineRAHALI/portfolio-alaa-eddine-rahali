import React from "react";
import "./aboutMeStyles.css";
import alaaeddine from "../../assets/images/alaaeddine.png";

const AboutMe = () => {
  return (
    <section id="about" className=" px-5 py-[16%]  lg:pt-[06%] sm:px-20 ">
      <div>
        <div className=" flex flex-col items-center ">
          <div>
            <img
              src={alaaeddine}
              alt="About picture"
              className="box rounded-full"
            />
          </div>
          <div className="pt-12 lg:pt-0 flex flex-col items-center">
            <h1 className=" pb-8 md:pt-16 text-3xl">
              Salut et bienvenue sur mon portoflio Je m&apos;appelle
            </h1>
            <p className="animate-charcter px-8 py-4 text-7xl"> Alaa Eddine</p>
            <h1 className=" lg:pt-2 md:pt-8 text-3xl text-[#0172B1]">
              Ingénieur Consultant
            </h1>
            <h2 className=" pb-12 lg:pb-8 text-3xl text-[#0172B1]">
              Développeur Junior Full Stack React Javascript
            </h2>

            <a
              className=" inline-block rounded-3xl bg-[#0172b1] px-8 py-3 text-xl  font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
              href="/download"
            >
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutMe);
