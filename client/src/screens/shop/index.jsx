import React, { useState, useEffect } from "react";
import { Switch, Route, NavLink, Link, useRouteMatch } from "react-router-dom";

// Children
import Header from "../../components/Header";
import Items from "./Items";

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
  const [filteredItems, setFilteredItems] = useState([]);
  let { path, url } = useRouteMatch();

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
  // Filter shop items
  const shopItems = [];
  entries.filter((entry) =>
    entry.sys.contentType.sys.id === "shopItem" ? shopItems.push(entry) : null
  );

  // Filter by category
  const filter1 = () => {
    const results = [];
    shopItems.filter((item) =>
      item.fields.category === "Униформа" ? results.push(item) : null
    );
    setFilteredItems(results);
    console.log(results);
  };
  const filter2 = () => {
    const results = [];
    shopItems.filter((item) =>
      item.fields.category === "PW" ? results.push(item) : null
    );
    setFilteredItems(results);
    console.log(results);
  };
  const filter3 = () => {
    const results = [];
    shopItems.filter((item) =>
      item.fields.category === "Аксессуары" ? results.push(item) : null
    );
    setFilteredItems(results);
    console.log(results);
  };

  return (
    <div>
      <Header title="Магазин" />
      <div className={styles.container}>
        <div>
          <p>
            Наш магазин готовится к запуску в он-лайн режиме. Если вы хотите
            купить или заказать готовые изделия из вторичного текстиля,
            представленные в галерее ниже, <Link to='/контакты'>пишите и звоните нам</Link>
            . Мы всегда рады
            вам помочь!
          </p>
        </div>
        <section>
          <aside>
            <ul>
              <li>
                <NavLink to={`${url}`} exact activeClassName={styles.active}>
                  Все товары
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${url}/униформа`}
                  exact
                  activeClassName={styles.active}
                  onClick={filter1}
                >
                  Униформа
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${url}/тканиpw`}
                  exact
                  activeClassName={styles.active}
                  onClick={filter2}
                >
                  Каталог тканей PW
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${url}/аксессуары`}
                  exact
                  activeClassName={styles.active}
                  onClick={filter3}
                >
                  Аксессуары
                </NavLink>
              </li>
            </ul>
          </aside>
          <main>
            <Switch>
              <Route exact path={path}>
                <Items shopItems={shopItems} />
              </Route>
              <Route path={`${path}/:category`}>
                {filteredItems.length ? (
                  <Items shopItems={filteredItems} />
                ) : (
                  <p>В данном разделе нет товаров.</p>
                )}
              </Route>
            </Switch>
          </main>
        </section>
      </div>
    </div>
  );
};

export default Shop;
