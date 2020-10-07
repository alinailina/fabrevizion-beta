import React from "react";
import { Link } from "react-router-dom";

// Date helper functions
import { formatDate, formatMonth, formatYear } from "./Date";

// Styles
import styles from "./index.module.scss";

const Post = ({ post }) => {
  // console.log(post);
  const { date, type, title, tags } = post.fields;

  // Img
  const { file } = post.fields.heroImage.fields;

  return (
    <div className={styles.post}>
      <p>
        {formatDate(date)} / {formatMonth(date)} / {formatYear(date)}
      </p>
      <p>{type}</p>
      <img src={file.url} alt="hero-img" />
      <h3>{title}</h3>
      <div>
        {tags.length
          ? tags.map((tag, index) => <p key={index}>#{tag}</p>)
          : null}
      </div>
      <Link to={{ pathname: "/fullpost", state: { post: post } }}>
        Читать статью
      </Link>
    </div>
  );
};

export default Post;
