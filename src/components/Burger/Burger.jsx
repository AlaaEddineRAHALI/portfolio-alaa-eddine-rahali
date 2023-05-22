import React from "react";
import "./burgerStyles.css";

function Burger() {
  return (
    <div className="hamburger">
      <div className="burger " />
      <div className="burger" />
      <div className="burger" />
    </div>
  );
}

export default React.memo(Burger);
