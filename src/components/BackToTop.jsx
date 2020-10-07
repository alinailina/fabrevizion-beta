import React from "react";
import { Link } from "react-router-dom";

const BackToTop = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link onClick={scrollTop} className="backToTop">
      Наверх
    </Link>
  );
};

export default BackToTop;
