import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

// Styles
import styles from "./index.module.scss";

const FullPost = (props) => {
  const post = props.location.state.post;
  console.log(post);
  const { type, title, bodyText } = post.fields;

  // Img + description
  const { file, description } = post.fields.heroImage.fields;

  // Format text
  const stringText = documentToHtmlString(bodyText);

  return (
    <div className={styles.fullPost}>
      <p>{type}</p>
      <h1>{title}</h1>
      {/* <p className={styles.date}>
        {formatDate(date)} / {formatMonth(date)} / {formatYear(date)}
      </p> */}
      <div className={styles.img}>
        <img src={file.url} alt="hero-img" />
      </div>

      <p className={styles.description}>{description}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: stringText,
        }}
      ></div>
    </div>
  );
};

export default FullPost;
