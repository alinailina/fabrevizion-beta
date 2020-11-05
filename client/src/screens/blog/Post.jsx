import React from "react";
import { Link } from "react-router-dom";

// Date functions
//import { formatDate, formatMonth, formatYear } from "./Date";

// Styles
import styles from "./index.module.scss";

const Post = ({ post }) => {
  const {  type, title } = post.fields;
  const { file } = post.fields.heroImage.fields;

  return (
    <div className={styles.post}>
      {/* <p>
        {formatDate(date)} / {formatMonth(date)} / {formatYear(date)}
      </p> */}
      <p>{type} </p>
      <Link to={{ pathname: `/post/${title}`, state: { post: post } }}>
        <img src={file.url} alt="hero-img" />{" "}
      </Link>
      <h3>{title}</h3>
    </div>
  );
};

export default Post;
