import React, { useState, useEffect } from "react";

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

  return (
    <div>
      <Header title="Блог" />
      <div className={styles.container}>
        <section>
          {/* <aside></aside> */}
          <main>
            <Posts posts={posts} />
          </main>
        </section>
      </div>
    </div>
  );
};

export default Blog;
