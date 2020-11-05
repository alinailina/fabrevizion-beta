import React, { useState, useRef, useEffect } from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

// Styles
import styles from "./index.module.scss";

const Item = ({ faq }) => {
  const [active, setActive] = useState(false);
  const answerRef = useRef(null);
  const questionRef = useRef(null);

  const { question, answer } = faq.fields;
  const stringText = documentToHtmlString(answer);

  useEffect(() => {
    answerRef.current.style.maxHeight = active
      ? `${answerRef.current.scrollHeight}px`
      : "0px";
    questionRef.current.style.borderBottom = active ? "none" : "";
    questionRef.current.style.color = active ? "#a7c957" : "black";
  }, [active]);

  const toogleActive = () => {
    setActive(!active);
  };

  return (
    <div className={styles.item}>
      <div className={styles.question} ref={questionRef} onClick={toogleActive}>
        <h3>{question}</h3>
        <div className={active ? "toggle active" : "toggle"}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={styles.answer}
        ref={answerRef}
        dangerouslySetInnerHTML={{
          __html: stringText,
        }}
      ></div>
    </div>
  );
};

export default Item;
