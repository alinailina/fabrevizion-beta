import React, { useState, useRef, useEffect } from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

// Styles
import styles from "./index.module.scss";

const Item = ({ faq }) => {
  const [active, setActive] = useState(false);
  const answerRef = useRef(null);
  const questionRef = useRef(null);

  const { question, answer } = faq.fields;
  console.log(question);
  const stringText = documentToHtmlString(answer);

  useEffect(() => {
    answerRef.current.style.maxHeight = active
      ? `${answerRef.current.scrollHeight}px`
      : "0px";
    answerRef.current.style.padding = active ? "0 0 25px" : "0";
    answerRef.current.style.marginBottom = active ? "25px" : "0";
  }, [active]);

  useEffect(() => {
    questionRef.current.style.backgroundColor = active
      ? "rgb(250, 240, 230)"
      : "white";
    questionRef.current.style.border = active ? "none" : "1px solid #2d2d2d";
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
