/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import logo_website from "../../assets/images/logo_website.png";

const Footer = () => {
  /*function to manage current Date*/
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <div>
      <footer aria-label="Site Footer" className="bg-white px-5 sm:px-20 ">
        <div className="mx-auto p-5 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <a>
              {/*Redirection to home page on click on lgoo_website*/}
              <img
                src={logo_website}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "about";
                }}
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
