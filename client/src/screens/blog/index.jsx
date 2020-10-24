import React, { useState, useEffect } from "react";
import SkeletonComponent from "./SkeletonComponent";

// Styles
import styles from "./index.module.scss";

// Children
import Header from "../../components/Header";
import Filters from "./Filters";
import BackToTop from "../../components/BackToTop";

const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

const Blog = () => {
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

  const posts = [];

  // Filter blog entries
  entries.filter((entry) =>
    entry.sys.contentType.sys.id === "blogPost" ? posts.push(entry) : null
  );
  console.log(posts);

  return (
    <div className={styles.container}>
      <Header title="Блог" />
     
      {loading && <SkeletonComponent />}
      {!loading &&  <Filters posts={posts} />} 
      <BackToTop />
    </div>
  );
};

export default Blog;
