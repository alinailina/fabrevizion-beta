import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Home
import Home from "./screens/home/index.jsx";

// About
import About from "./screens/company/About";
import Process from "./screens/company/Process";
import Principles from "./screens/company/Principles";

// Shop
import Shop from "./screens/shop";
import ItemDetails from "./screens/shop/ItemDetails";

// Events
import Events from "./screens/events";

// Blog
import Blog from "./screens/blog";
import FullPost from "./screens/blog/FullPost";

// Contact
import Contacts from "./screens/contacts";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />

        {/* About */}
        <Route path="/компания" component={About} />
        <Route path="/процесс" component={Process} />
        <Route path="/принципы" component={Principles} />

        {/* Shop */}
        <Route path="/магазин" component={Shop} />
        <Route path="/item/:title" component={ItemDetails} />

        {/* Events */}
        <Route path="/события" component={Events} />

        {/* Blog */}
        <Route path="/блог" component={Blog} />
        <Route path="/post/:id" component={FullPost} />

        {/* Contact */}
        <Route path="/контакты" component={Contacts} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
