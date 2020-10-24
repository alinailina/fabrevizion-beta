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
      post.fields.type === "Истории" ? results.push(post) : null
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
      post.fields.type === "Разбор" ? results.push(post) : null
    );
    setFilteredPosts(results);
  };

  return (
    <div className={styles.filters}>
      <ul>
        <li onClick={() => setFilteredPosts(posts)}>Все статьи</li>
        <li onClick={filter1}>Истории</li>
        <li onClick={filter2}>Новости</li>
        <li onClick={filter3}>Партнеры</li>
        <li onClick={filter4}>Разбор</li>
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
