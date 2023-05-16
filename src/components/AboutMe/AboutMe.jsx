import React from "react";
import "./aboutMeStyles.css";
import alaaeddine from "../../assets/images/alaaeddine.png";

const AboutMe = () => {
  return (
    <section id="about" className=" px-5 py-[16%]  sm:px-20 lg:pt-[06%] ">
      <div>
        <div className=" flex flex-col items-center ">
          <div className="flex flex-col items-center pt-2 lg:pt-0">
            <div className="box py-40">
              <div className="card my-28">
                <div className="imgBx m-0">
                  <img src={alaaeddine} alt="images"></img>
                </div>
              </div>
            </div>

            <h1 className=" pb-2 text-3xl md:pt-2 py-34">Salut, je suis</h1>
            <p className="px-8 py-4 text-7xl"> Alaa Eddine</p>
            <div className="bg-white h-64 my-24 text-center  text-black">
              <h1 className=" text-3xl text-[#0172B1] contrast-200 md:pt-8 lg:pt-2">
                Ingénieur Consultant
              </h1>
              <h2 className="  pb-12 text-3xl text-[#0172B1] contrast-200 lg:pb-8">
                Développeur Junior Full Stack React Javascript
              </h2>
            </div>

            <button
              className={
                " border-2 border-white border-solid py-3 px-6 rounded-full hover:text-[#0172B1] hover:bg-secondary"
              }
            >
              Télécharger mon CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutMe);
