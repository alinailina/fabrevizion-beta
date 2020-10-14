import React from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./index.module.scss";

const Infographic = () => {
  return (
    <div className={styles.infographic}>
      <div>
        <img src={require("../../assets/infographic.svg")} alt="" />
      </div>
      <Link to="process">Как мы работаем</Link>
    </div>
  );
};

export default Infographic;
