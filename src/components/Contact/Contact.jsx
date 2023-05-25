import React, { useRef, useState } from "react";

import contact from "../../assets/images/contact.png";
import emailjs from "@emailjs/browser";
import "./contactStyles.css";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const mail = import.meta.env.VITE_APP_EMAILJS_GMAIL_ADD;
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "AlaaEddine Portoflio",
          from_email: form.email,
          to_email: mail,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Merci. Je reviendrai vers vous dans les plus brefs délais");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert(" Veuillez réessayer. Quelque chose n'a pas fonctionné");
        }
      );
  };

  return (
    <>
      <section id="contact" className="section__contact px-5">
        <div className=" flex flex-wrap justify-center pb-32 pt-20 sm:pb-48 lg:h-screen lg:items-center lg:pt-[0%] lg:py-[7%] 2xl:py-0 2xl:pt-[5%]">
          <div className=" w-full px-4  sm:px-6  lg:w-1/2 lg:px-8 ">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-3xl font-bold text-gray-500 sm:text-5xl">
                Contactez moi !
              </h1>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              action=""
              className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            >
              <div>
                <label htmlFor="text" className="sr-only">
                  votre Nom
                </label>

                <div className="">
                  <input
                    onChange={handleChange}
                    value={form.name}
                    type="text"
                    name="name"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Quel est votre nom ?"
                    required
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
                    onChange={handleChange}
                    value={form.email}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Quel est votre email"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="">
                  <textarea
                    type="text"
                    name="message"
                    onChange={handleChange}
                    value={form.message}
                    placeholder="Enter votre message"
                    className="w-full rounded-lg border-none border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="inline-block rounded-full bg-[#0172B1] px-5 py-3 font-medium text-base  text-white  hover:text-black "
                >
                  {loading ? "Envoie en cours..." : "Envoyez"}
                </button>
              </div>
            </form>
          </div>

          <div className="flex items-center justify-center">
            <img
              alt="Welcome"
              src={contact}
              className=" image inset-0 mt-8 h-[300px]  w-[300px] object-cover md:h-[450px] md:w-[450px] lg:mt-0 lg:h-[450px] lg:w-[450px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Contact);
