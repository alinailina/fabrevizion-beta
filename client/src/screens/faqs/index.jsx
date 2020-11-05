import React, { useState, useEffect } from "react";

// Children
import Header from "../../components/Header";
import Accordion from "./Accordion";

// Styles
import styles from "./index.module.scss";

// Contentful Delivery API
const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

const FAQs = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get all entries
  useEffect(() => {
    
    setLoading(true);
    client
      .getEntries()
      .then((response) => setEntries(response.items))
      .catch(console.error);
    setLoading(false);
  }, []);
  console.log(loading);

  // Filter faqs
  const faqs = [];
  entries.filter((entry) =>
    entry.sys.contentType.sys.id === "faqs" ? faqs.push(entry) : null
  );

  return (
    <div>
      <Header title="Вопросы и ответы" />{" "}
      <div className={styles.container}>
        <Accordion faqs={faqs} />
      </div>
    </div>
  );
};

export default FAQs;
