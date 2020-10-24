import React from "react";
import { Link } from "react-router-dom";

const BackToTop = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link onClick={scrollTop} className="backToTop">
      <span>
        <img src={require("../assets/arrow-up.svg")} alt="arrow-up" />
      </span>
    </Link>
  );
};

export default BackToTop;
