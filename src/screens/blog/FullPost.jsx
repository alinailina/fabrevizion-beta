import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

// Date helper functions
import { formatDate, formatMonth, formatYear } from "./Date";

// Styles
import styles from "./index.module.scss";

// Children
import Header from "../../components/Header";

const FullPost = (props) => {
  const post = props.location.state.post;
  console.log(post);

  const { date, type, title, tags, bodyText } = post.fields;

  // Img + description
  const { file, description } = post.fields.heroImage.fields;

  // Format text
  const stringText = documentToHtmlString(bodyText);

  return (
    <div className={styles.container}>
      <Header title="" />
      <p>{type}</p>
      <h1>{title}</h1>
      <p className={styles.date}>
        {formatDate(date)} / {formatMonth(date)} / {formatYear(date)}
      </p>

      <img src={file.url} alt="hero-img" />
      <p className={styles.description}>{description}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: stringText,
        }}
      ></div>
      <div className={styles.tags}>
        {tags.length
          ? tags.map((tag, index) => <p key={index}>#{tag}</p>)
          : null}
      </div>
    </div>
  );
};

export default FullPost;
