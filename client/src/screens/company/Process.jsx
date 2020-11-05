import React from "react";
import { Link } from "react-router-dom";

// Children
import Header from "../../components/Header";
import BackToTop from "../../components/BackToTop";

// Styles
import styles from "./index.module.scss";

const Process = () => {
  return (
    <div>
      <Header title="Как мы работаем" />
      <div className={styles.process}>
        <ul>
          <li>
            <div>
              <img
                src={require("../../assets/process_1.svg")}
                alt="old-garments"
              />
            </div>

            <div>
              <div>
                <span>Шаг 1</span>
                <p>
                  Вы сдаете нам или нашим партнерам ваши использованные
                  текстильные изделия. Можно с повреждениями, но, главное, в
                  сухом и чистом виде (смотреть подробную инструкцию{" "}
                  <Link>здесь</Link>
                  ).
                </p>
                <p>
                  Мы выдаем вам сертификат о том, что текстиль поступил на
                  переработку.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <img
                src={require("../../assets/process_2.svg")}
                alt="examining-old-garments"
              />
            </div>
            <div>
              <div>
                <span>Шаг 2</span>
                <p>
                  Мы изучаем собранный текстиль и выбираем оптимальный вариант:
                  обработать его в Петербурге или отправить на переработку нашим
                  партнерам в Финляндию.
                </p>
                <p>
                  Познакомиться с нашими дизайнерами и узнать подробнее о складе
                  и процессе сортировке вы сможете <Link>здесь</Link>.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div>
              <img
                src={require("../../assets/process_3.svg")}
                alt="new-clothing-items"
              />
            </div>
            <div>
              <div>
                <span>Шаг 3</span>
                <p>
                  Из обработанного в Петербурге текстиля мы изготовим{" "}
                  <Link to="магазин">новую униформу</Link> по нашим моделям или
                  по вашему тех. заданию, а также другие изделия, разработанные
                  нашими дизайнерами.
                </p>
                <p>
                  Мы дополним коллекцию униформы одеждой, изготовленной из
                  тканей из переработанных волокон хлопка и ПЭТ, производства
                  компании{" "}
                  <a
                    href="https://www.purewaste.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pure Waste
                  </a>
                  , официальным дистрибьютором которых мы являемся.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <img
                src={require("../../assets/process_4.svg")}
                alt="recycled-content-certification"
              />
            </div>
            <div>
              <div>
                <span>Шаг 4</span>
                <p>
                  Вы получаете новую униформу из вторичного сырья и сертификат
                  об использовании изделий вторичной переработки.
                </p>
                <p>
                  Кроме того, <Link to="магазин">в нашем магазине</Link> можно
                  купить или заказать уже готовые изделия из вторичного
                  текстиля.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div>
              <img
                src={require("../../assets/process_5.svg")}
                alt="textile-recycling-plant"
              />
            </div>
            <div>
              <div>
                <span>Шаг 5</span>
                <p>
                  Отсортированный на переработку в Финляндии текстиль будет
                  переработан на предприятии наших партнеров по самым
                  инновационным технологиям без ущерба для окружающей среды. Из
                  него произведут волокно для новых тканей или композитных
                  материалов, которые вы также сможете приобрести{" "}
                  <Link to="магазин">в нашем магазине</Link>.
                </p>
                <p>
                  Узнать подробнее о том, как осуществляется переработка на
                  предприятии наших финских партнеров, Вы можете{" "}
                  <Link>здесь</Link>.
                </p>
              </div>
            </div>
          </li>
        </ul>
        <BackToTop />
      </div>
    </div>
  );
};

export default Process;
