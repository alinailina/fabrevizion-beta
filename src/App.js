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
        <Route path="/about" component={About} />
        <Route path="/process" component={Process} />
        <Route path="/principles" component={Principles} />

        {/* Shop */}
        <Route path="/shop" component={Shop} />
        <Route path="/itemdetails" component={ItemDetails} />

        {/* Events */}
        <Route path="/events" component={Events} />

        {/* Blog */}
        <Route path="/blog" component={Blog} />
        <Route path="/fullpost" component={FullPost} />

        {/* Contact */}
        <Route path="/contacts" component={Contacts} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
