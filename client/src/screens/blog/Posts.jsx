import React from "react";

// Children
import Post from "./Post";

// Styles
import styles from "./index.module.scss";

const Posts = ({ posts }) => {
  return (
    <div className={styles.posts}>
      {posts.map((post, index) => (
        <Post key={index} post={post} i={index} />
      ))}
      <i aria-hidden="true"></i>
    </div>
  );
};

export default Posts;
