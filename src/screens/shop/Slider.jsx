import React, { useState } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

// Styles
import styles from "./index.module.scss";

const Slider = ({ images }) => {
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (images.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    setX(x - 100);
    x === -100 * (images.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className={styles.slider}>
      {images.map((img, index) => {
        return (
          <div key={index} style={{ transform: `translateX(${x}%)` }}>
            <img src={img.fields.file.url} alt="shopping-item" />
          </div>
        );
      })}
      <span onClick={goLeft}>
        <BsChevronCompactLeft />
      </span>
      <span onClick={goRight}>
        <BsChevronCompactRight />
      </span>
    </div>
  );
};

export default Slider;
