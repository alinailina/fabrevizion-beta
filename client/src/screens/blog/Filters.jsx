import React, { useState } from "react";

// Styles
import styles from "./index.module.scss";

// Children
import Posts from "./Posts";

const Filters = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState([]);

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
    <div className={styles.filters}>
      <ul>
        <li onClick={() => setFilteredPosts(posts)}>
          <button>Все статьи</button>
        </li>
        <li onClick={filter1}>
          <button>Факты</button>
        </li>
        <li onClick={filter2}>
          <button>Новости и события</button>
        </li>
        <li onClick={filter3}>
          <button>Партнеры</button>
        </li>
        <li onClick={filter4}>
          <button>Практикум</button>
        </li>
      </ul>
      {filteredPosts.length ? (
        <Posts posts={filteredPosts} />
      ) : (
        <Posts posts={posts} />
      )}
    </div>
  );
};

export default Filters;
