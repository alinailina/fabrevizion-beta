import React, { useState, useEffect } from "react";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";

// Styles
import styles from "./index.module.scss";

// Children
import Header from "../../components/Header";
import Posts from "./Posts";

// Contentful delivery API
const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

const Blog = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState([]);
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
  // Filter blog entries
  const posts = [];
  entries.filter((entry) =>
    entry.sys.contentType.sys.id === "blogPost" ? posts.push(entry) : null
  );

  // Filter post categories
  const filter1 = () => {
    const results = [];
    posts.filter((post) =>
      post.fields.type === "Факты" ? results.push(post) : null
    );
    setFilteredPosts(results);
  };
  const filter2 = () => {
    const results = [];
    posts.filter((post) =>
      post.fields.type === "Новости" ? results.push(post) : null
    );
    setFilteredPosts(results);
  };
  const filter3 = () => {
    const results = [];
    posts.filter((post) =>
      post.fields.type === "Партнеры" ? results.push(post) : null
    );
    setFilteredPosts(results);
  };
  const filter4 = () => {
    const results = [];
    posts.filter((post) =>
      post.fields.type === "Практикум" ? results.push(post) : null
    );
    setFilteredPosts(results);
  };

  return (
    <div>
      <Header title="Блог" />
      <div className={styles.container}>
        <section>
          <aside>
            <ul>
              <li>
                <NavLink to={`${url}`} exact activeClassName={styles.active}>
                  Все статьи
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${url}/факты`}
                  exact
                  activeClassName={styles.active}
                  onClick={filter1}
                >
                  Факты
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${url}/новости`}
                  exact
                  activeClassName={styles.active}
                  onClick={filter2}
                >
                  Новости
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${url}/партнеры`}
                  exact
                  activeClassName={styles.active}
                  onClick={filter3}
                >
                  Партнеры
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${url}/практикум`}
                  exact
                  activeClassName={styles.active}
                  onClick={filter4}
                >
                  Практикум
                </NavLink>
              </li>
            </ul>
          </aside>
          <main>
            <Switch>
              <Route exact path={path}>
                <Posts posts={posts} />
              </Route>
              <Route path={`${path}/:id`}>
                {filteredPosts.length ? (
                  <Posts posts={filteredPosts} />
                ) : (
                  <p>В данном разделе нет статей.</p>
                )}
              </Route>
            </Switch>
          </main>
        </section>
      </div>
    </div>
  );
};

export default Blog;
