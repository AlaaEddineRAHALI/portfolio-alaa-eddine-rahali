import React from "react";
import contact from "../../assets/images/contact.png";
import "./contactStyles.css";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="section__contact px-5 py-[20%] sm:px-20 lg:pt-[0%] "
      >
        <section className=" flex flex-wrap lg:h-screen lg:items-center">
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-3xl font-bold text-gray-500 sm:text-5xl">
                Contact me
              </h1>
            </div>

            <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
              <div>
                <label htmlFor="text" className="sr-only">
                  votre Nom
                </label>

                <div className="">
                  <input
                    type="text"
                    name="name"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Quel est votre nom ?"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Votre E-mail
                </label>

                <div className="">
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Quel est votre email"
                  />
                </div>
              </div>

              <div>
                <div className="">
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Enter votre message"
                    className="w-full rounded-lg border-none border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>

          <div className="flex h-64 w-full items-center justify-center sm:h-96  lg:h-[100%] lg:w-3/6 lg:justify-normal">
            <img
              alt="Welcome"
              src={contact}
              className=" image inset-0 h-[90%] w-[70%]  object-cover md:h-[120%]  md:w-[80%] lg:h-4/6 lg:w-5/6 "
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default React.memo(Contact);
