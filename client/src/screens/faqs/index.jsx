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

  useEffect(() => {
    setLoading(true);
    client
      .getEntries()
      .then((response) => setEntries(response.items))
      .catch(console.error);
    setLoading(false);
  }, []);

  const faqs = [];

  // Filter faqs entries
  entries.filter((entry) =>
    entry.sys.contentType.sys.id === "faqs" ? faqs.push(entry) : null
  );

  console.log(faqs);

  return (
    <div className={styles.container}>
      <Header title="Вопросы и ответы" />
      <Accordion faqs={faqs} />
    </div>
  );
};

export default FAQs;
