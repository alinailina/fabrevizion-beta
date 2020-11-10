import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";

// Home
import Home from "./screens/home/index.jsx";

// About
import About from "./screens/company/About";
import Process from "./screens/company/Process";
import Principles from "./screens/company/Principles";

// Shop
import Shop from "./screens/shop";

// Events
import FAQs from "./screens/faqs";

// Events
import Events from "./screens/events";

// Blog
import Blog from "./screens/blog";
import FullPost from "./screens/blog/FullPost";

// Contact
import Contacts from "./screens/contacts";
import PrivacyPolicy from "./components/PrivacyPolicy";

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
        {/* <Route path="/item/:title" component={ItemDetails} /> */}

        {/* FAQs */}
        <Route path="/вопросыиответы" component={FAQs} />

        {/* Events */}
        <Route path="/события" component={Events} />

        {/* Blog */}
        <Route exact path="/блог" component={Blog} />
        <Route path="/блог/:title" component={FullPost} />

        {/* Contact */}
        <Route path="/контакты" component={Contacts} />
        
        <Route path='/политикаконфиденциальности' component={PrivacyPolicy}/>
      </Switch>
      <BackToTop />
      <Footer />
    </Router>
  );
}

export default App;
