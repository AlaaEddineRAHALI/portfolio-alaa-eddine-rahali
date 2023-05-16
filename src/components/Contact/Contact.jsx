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
      <section
        id="contact"
        className="px-5 py-[20%] sm:px-20 lg:pt-[0%] section__contact"
      >
        <section className=" flex flex-wrap lg:h-screen lg:items-center">
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-3xl font-bold text-gray-500 sm:text-5xl">
                Contactez moi
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
                  className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                  {loading ? "Envoie en cours..." : "Envoyez"}
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
