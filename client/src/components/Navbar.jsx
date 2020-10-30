import React, { useState } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <nav>
      <div className="nav-logo">
        <NavLink to="/">
          <img src={require("../assets/logo.svg")} alt="logo" />
        </NavLink>
      </div>
      <div
        className={active ? "toggle active" : "toggle"}
        onClick={toggleActive}
      >
        <div className="hamburger"></div>
      </div>

      <ul className={active ? "active" : ""}>
        <li className={active ? "" : "active"} onClick={toggleActive}>
          <p>Компания</p>
          <ul>
            <li>
              <NavLink to="компания" activeClassName="navlink-active">
                О нас
              </NavLink>
            </li>
            <li>
              <NavLink to="процесс" activeClassName="navlink-active">
                Как мы работаем
              </NavLink>
            </li>
            <li>
              <NavLink to="принципы" activeClassName="navlink-active">
                Наши принципы
              </NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink
            to="магазин"
            onClick={toggleActive}
            activeClassName="navlink-active"
          >
            Магазин
          </NavLink>
        </li>
        <li>
          <NavLink
            to="вопросыиответы"
            onClick={toggleActive}
            activeClassName="navlink-active"
          >
            Вопросы и ответы
          </NavLink>
        </li>
        <li>
          <NavLink
            to="события"
            onClick={toggleActive}
            activeClassName="navlink-active"
          >
            События
          </NavLink>
        </li>
        <li>
          <NavLink
            to="блог"
            onClick={toggleActive}
            activeClassName="navlink-active"
          >
            Блог
          </NavLink>
        </li>
        <li>
          <NavLink
            to="контакты"
            onClick={toggleActive}
            activeClassName="navlink-active"
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
