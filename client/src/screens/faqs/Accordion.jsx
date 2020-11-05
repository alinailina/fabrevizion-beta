import React from "react";

// Children
import Item from "./Item";

// Styles
import styles from "./index.module.scss";

const Accordion = ({ faqs }) => {
  return (
    <div className={styles.accordion}>
      {faqs.map((faq, i) => {
        return <Item key={i} faq={faq} />;
      })}
    </div>
  );
};

export default Accordion;
