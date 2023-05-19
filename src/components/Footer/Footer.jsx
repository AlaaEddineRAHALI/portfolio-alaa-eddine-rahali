/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import alaaeddine from "../../assets/images/alaaeddine.png";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <div>
      <footer aria-label="Site Footer" className="bg-gray-500 px-5 sm:px-20">
        <div className="mx-auto p-5 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <a>
              <img
                src={alaaeddine}
                alt="logo"
                className="h-11 w-11 object-contain "
              />
            </a>
          </div>

          <p className="mx-auto mt-2 max-w-md text-center leading-relaxed text-white ">
            Portfolio © {year}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
