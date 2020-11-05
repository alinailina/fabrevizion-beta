import React from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./index.module.scss";

import { GoCheck } from "react-icons/go";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card1}>
        <div className={styles.innerCard1}>
          <div>
            <h1>
              Fab<span>Re</span>
              vizion
            </h1>
            <p>Новый взгляд на уход за текстилем</p>
            <div>
              <Link to="/компания">Подробнее о нас</Link>
              <Link to="/контакты">Связаться</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.card2}>
        <p>
          Думаете, что делать с качественными, <br />
          но поврежденными текстильными вещами?
        </p>
      </div>
      <div className={styles.card3}></div>
      <div className={styles.card4}>
        <p>
          Мы предлагаем{" "}
          <span className="underline-green">
            альтернативный экологичный уход
          </span>{" "}
          полного цикла <br />
          за использованным текстилем!
        </p>
        <p>
          Вы получите{" "}
          <span className="underline-green">новые вещи высокого качества</span>{" "}
          из ваших же текстильных материалов, потому что мы переработаем
          использованный текстиль с применением инновационных технологий,
          продлив его жизненный цикл.
        </p>
        <div>
          <Link to="/процесс">Как мы работаем</Link>
        </div>
      </div>
      <div className={styles.card5}></div>
      <div className={styles.card6}>
        <div>
          <p>
            Вместе с вами мы создаем новую модель бизнеса, которая соответствует
            принципам 4R:
          </p>
          <ul>
            <li>
              <div>
                <img
                  src={require("../../assets/arr_reduce.svg")}
                  alt="reduce"
                />
              </div>
              <span>reduce</span>
              <p>уменьшение использования первичного хлопка</p>
            </li>
            <li>
              <div>
                <img
                  src={require("../../assets/arr_reuse.svg")}
                  alt="reuse"
                />
              </div>
              <span>reuse</span>
              <p>новое применение использованному текстилю</p>
            </li>
            <li>
              <div>
                <img
                  src={require("../../assets/arr_recycle.svg")}
                  alt="recycle"
                />
              </div>
              <span>recycle</span>
              <p>придание новых качеств старому текстилю (upcycling)</p>
            </li>
            <li>
              <div>
                <img
                  src={require("../../assets/arr_recover.svg")}
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
          <Link to="принципы" className={styles.link}>
            Наши принципы
          </Link>
        </div>
      </div>
      <div className={styles.card7}>
        <div>
          <ul>
            <li>
              {" "}
              <p>Мы ваши единомышленники, союзники и надежные партнеры, если</p>
            </li>
            <li>
              <p>
                {" "}
                <span>
                  <GoCheck />
                </span>{" "}
                вы заинтересованы в более экологичных продуктах и услугах,
              </p>
            </li>
            <li>
              <p>
                <span>
                  <GoCheck />
                </span>{" "}
                вы стремитесь улучшить социальные и экологические показатели
                вашей компании,
              </p>
            </li>
            <li>
              <p>
                <span>
                  <GoCheck />
                </span>{" "}
                вы поставили перед собой задачи по реальному достижению{" "}
                <a
                  href="https://www.un.org/sustainabledevelopment/ru/about/development-agenda/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Повестки устойчивого развития-2030.
                </a>
              </p>
            </li>
          </ul>
          <p>
            Цель проекта <span className={styles.name}>FabRevizion</span> –
            чтобы наши клиенты, связанные с производством и эксплуатацией
            текстильной продукции, а также все осознанные потребители получили
            инновационные экологичные{" "}
            <span className="underline-green">
              решения по уходу за использованным текстилем и остатками
              текстильного производства
            </span>
            .{" "}
          </p>{" "}
          <p>Только вместе сделаем мир лучше!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
