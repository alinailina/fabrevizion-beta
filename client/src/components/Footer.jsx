import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <aside>
          <div>
            <div>
              <img src={require("../assets/logo.svg")} alt="recycled-cotton" />
            </div>
            <h3>Fabrevizion</h3>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/компания">О нас</Link>
              </li>
              <li>
                <Link to="/процесс">Как мы работаем</Link>
              </li>
              <li>
                <Link to="/принципы">Наши принципы</Link>
              </li>
              <li>
                <Link>Полика конфеденциальности</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="магазин">Магазин</Link>
              </li>
              <li>
                <Link to="события">События</Link>
              </li>
              <li>
                <Link to="блог">Блог</Link>
              </li>
              <li>
                <Link to="контакты">Контакты</Link>
              </li>
            </ul>
          </div>

          <div>
            <p>Мы в социальных сетях:</p>
            <ul>
              <li>
                <a href="/">
                  <img src={require("../assets/linkedin.svg")} alt="linkedin" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={require("../assets/facebook.svg")} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src={require("../assets/instagram.svg")}
                    alt="instagram"
                  />
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div>
          <form>
            <p>Подпишитесь на нашу рассылку:</p>
            <div>
              <label>
                <input type="email" />
                <p>Адрес вашей электронной почты</p>
              </label>
              <input type="submit" value="Подписаться" />
            </div>
          </form>
          <div>
            {/* <img src={require("../assets/box.svg")} alt="recycled-apparel" /> */}
          </div>
        </div>
      </div>
      <h5 className="copyright">
        © <span>Fabrevizion</span>, 2020.
      </h5>
    </footer>
  );
};

export default Footer;
