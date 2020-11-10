// Filter post categories

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
