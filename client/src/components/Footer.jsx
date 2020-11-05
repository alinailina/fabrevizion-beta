import React from "react";


import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

import { SiInstagram } from "react-icons/si";


// Styles
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <aside>
          <p>Мы в социальных сетях</p>
          <ul>
            <li>
              <a href="/">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="/">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="/">
                <SiInstagram />
              </a>
            </li>
          </ul>
        </aside>
        <div>
        <p>Подпишитесь на нашу рассылку</p>
          <form>
              <label>
                <input type="email" />
                <p>Адрес вашей электронной почты</p>
              </label>
              <div><input type="submit" value="Подписаться" /></div>
              
          </form>
        </div>
      </div>
      <p className="copyright">
        © Fabrevizion, 2020.
      </p>
    </footer>
  );
};

export default Footer;
