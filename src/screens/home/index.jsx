import React from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.parallaxImg1}>
        <div className={styles.hero}>
          <div>
            <h1>Fabrevizion</h1>
            <p>Новый взгляд на уход за текстилем</p>
            <div>
              <Link to="/about">Подробнее о нас</Link>
              <Link to="/contacts">Связаться</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.text}>
        <div>
          <img src={require("../../assets/used-shirt.svg")} alt="used-apparel" />
        </div>
        <p>
          Думаете, что делать с <span className="highlight-gray">качественными</span>,{" "}
          <span className="highlight-gray">но поврежденными</span> текстильными вещами?
        </p>
        <div>
          <img src={require("../../assets/idea.svg")} alt="idea" />
        </div>
        <p>
          Мы предлагаем{" "}
          <span className="highlight-green">
            альтернативный экологичный уход
          </span>{" "}
          полного цикла за использованным текстилем.
        </p>
        <p>
          Вы сдаете нам свой использованный текстиль - мы находим ему{" "}
          <span className="highlight-green">новое применение</span>.
        </p>
        <div>
          <Link to="/process">Как мы работаем</Link>
        </div>
      </div>
      <div className={styles.parallaxImg2}></div>
      <div className={styles.text}>
        <p>
          Вы получите <span className="highlight-green">новые вещи высокого качества</span> из Ваших же текстильных
          материалов, потому что мы переработаем использованный текстиль с
          применением <span className="highlight-green">самых инновационных технологий</span>, продлив тем самым его
          жизненный цикл. 
        </p>
       
        <Link to="/shop">Перейти в магазин</Link>
      </div>
      <div className={styles.parallaxImg3}></div>
      <div className={styles.text2}>
        <div>
          <p>
            Вместе с Вами мы создаем новую модель бизнеса, которая соответствует
            принципам 4R:
          </p>
          <ul>
            <li>
              <div>
                <img
                  src={require("../../assets/reduce-arrow.svg")}
                  alt="reduce"
                />
              </div>
              <span>reduce</span>
              <p>уменьшение использования первичного хлопка</p>
            </li>
            <li>
              <div>
                <img
                  src={require("../../assets/reuse-arrow.svg")}
                  alt="reuse"
                />
              </div>
              <span>reuse</span>
              <p>новое применение использованному текстилю</p>
            </li>
            <li>
              <div>
                <img
                  src={require("../../assets/recycle-arrow.svg")}
                  alt="recycle"
                />
              </div>
              <span>recycle</span>
              <p>придание новых качеств старому текстилю (upcycling)</p>
            </li>
            <li>
              <div>
                <img
                  src={require("../../assets/recover-arrow.svg")}
                  alt="recover"
                />
              </div>
              <span>recover</span>
              <p>
                восстановление текстильного волокна с помощью передовых
                технологий
              </p>
            </li>
          </ul>
          <Link to="principles" className={styles.link}>
            Наши принципы
          </Link>
          <p>
            Ваши клиенты заинтересованы в более экологичных продуктах и услугах,
            а инвесторы все больше ориентируются на социальные и экологические
            показатели компании?
          </p>
          <p>
            Вы поставили перед собой задачи по реальному достижению{" "}
            <a
              href="https://www.un.org/sustainabledevelopment/ru/about/development-agenda/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Повестки устойчивого развития-2030
            </a>
            ?{" "}
          </p>
          <p>Тогда мы Ваши единомышленники, союзники и надежные партнеры.</p>
          <div className={styles.links}>
            <Link to="/about">Подробнее о нас</Link>
            <Link to="/contact">Связаться</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
