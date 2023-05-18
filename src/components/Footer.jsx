/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import alaaeddine from "../assets/images/alaaeddine.png";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <div>
      <footer aria-label="Site Footer" className="px-5 sm:px-20 bg-gray-500">
        <div className="mx-auto px-5 py-5 sm:px-6 lg:px-8 ">
          <div className="flex justify-center">
            <a href="/#header">
              <img
                src={alaaeddine}
                alt="logo"
                className="h-11 w-11 object-contain "
              />
            </a>
          </div>

          <p className="text-white mx-auto mt-2 max-w-md text-center leading-relaxed ">
            Portfolio © {year}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
