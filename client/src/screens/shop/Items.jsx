import React from "react";

// Children
import Item from "./Item";

// Styles
import styles from "./index.module.scss";

const Items = ({ shopItems }) => {
  return (
    <div className={styles.items}>
      {shopItems
        .slice(0)
        .reverse()
        .map((item, index) => (
          <Item key={index} item={item} />
        ))}
      <i aria-hidden="true"></i>
      <i aria-hidden="true"></i>
    </div>
  );
};

export default Items;
