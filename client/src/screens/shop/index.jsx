import React, { useState, useEffect } from "react";
import SkeletonComponent from "./Skeleton";

// Children
import Header from "../../components/Header";
import List from "./List";

// Styles
import styles from "./index.module.scss";

// Contentful Delivery API
const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

const Shop = () => {
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

  // Filter shop items
  const shopItems = [];
  entries.filter((entry) =>
    entry.sys.contentType.sys.id === "shopItem" ? shopItems.push(entry) : null
  );

  return (
    <div className={styles.container}>
      <Header title="Магазин" />
      <section>
        <p>
          Наш магазин готовится к запуску в он-лайн режиме. Если вы хотите
          купить или заказать готовые изделия из вторичного текстиля,
          представленные в галерее ниже, пишите и звоните сюда
          -------------------.
        </p>
        <p>Мы всегда рады помочь вам! </p>
      </section>
      {loading && <SkeletonComponent />}
      {!loading && <List shopItems={shopItems} />}
    </div>
  );
};

export default Shop;
