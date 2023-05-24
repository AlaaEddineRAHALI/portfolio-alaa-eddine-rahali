/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import logo from "../../assets/images/logo-ae.png";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <div>
      <footer aria-label="Site Footer" className="bg-white px-5 sm:px-20 ">
        <div className="mx-auto p-5 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <a>
              <img
                src={logo}
                alt="logo"
                className="h-11 w-11 object-contain "
              />
            </a>
          </div>

          <p className="mx-auto  max-w-md text-center leading-relaxed text-black ">
            Portfolio © {year}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
