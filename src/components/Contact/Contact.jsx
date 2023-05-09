import React from "react";

import "./contactStyles.css";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="section__contact bg-black px-5  sm:px-20"
      >
        <h1>contact</h1>
      </section>
      <span>&nbsp;</span>
    </>
  );
};

export default React.memo(Contact);
