import React from "react";
import { Link } from "react-router-dom";

// Children
import Header from "../../components/Header";
import BackToTop from "../../components/BackToTop";

// Styles
import styles from "./index.module.scss";

const Process = () => {
  return (
    <div className={styles.process}>
      <Header title="Как мы работаем" />
      <ul>
        <li>
          <span>1</span>
          <div>
            <img
              src={require("../../assets/old-garments.svg")}
              alt="old-garments"
            />
          </div>
          <div>
            <p>
              Вы сдаете нам или нашим партнерам Ваши использованные текстильные
              изделия. Можно с повреждениями, но, главное, в сухом и чистом виде
              (смотреть подробную инструкцию <Link>здесь</Link>
              ).
            </p>
            <p>
              Мы выдаем Вам сертификат о том, что текстиль поступил на
              переработку.
            </p>
          </div>
        </li>
        <li>
          <span>2</span>
          <div>
            <img
              src={require("../../assets/icons-and-graphic-03.svg")}
              alt="examining-old-garments"
            />
          </div>
          <div>
            <p>
              Мы изучаем собранный текстиль и выбираем оптимальный вариант:
              обработать его в Петербурге или отправить на переработку нашим
              партнерам в Финляндию.
            </p>
            <p>
              Познакомиться с нашими дизайнерами и узнать подробнее о складе и
              процессе сортировке Вы сможете <Link>здесь</Link>.
            </p>
          </div>
        </li>

        <li>
          <span>3</span>
          <div>
            <img
              src={require("../../assets/icons-and-graphic-02.svg")}
              alt="new-clothing-items"
            />
          </div>
          <div>
            {" "}
            <p>
              Из обработанного в Петербурге текстиля мы изготовим новую униформу
              по нашим моделям или по Вашему тех. заданию, а также другие
              изделия, разработанные нашими дизайнерами.
            </p>
            <p>
              Мы дополним коллекцию униформы одеждой, изготовленной из тканей из
              переработанных волокон хлопка и ПЭТ, производства компании{" "}
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
        </li>
        <li>
          <span>4</span>
          <div>
            <img
              src={require("../../assets/icons-and-graphic-04.svg")}
              alt="recycled-content-certification"
            />
          </div>
          <div>
            <p>
              Вы получаете новую униформу из вторичного сырья и сертификат об
              использовании изделий вторичной переработки.
            </p>
            <p>
              Кроме того, <Link to="shop">в нашем магазине</Link> можно купить
              или заказать уже готовые изделия из вторичного текстиля.
            </p>
          </div>
        </li>

        <li>
          <span>5</span>
          <div>
            <img
              src={require("../../assets/icons-and-graphic-05.svg")}
              alt="textile-recycling-plant"
            />
          </div>
          <div>
            <p>
              Отсортированный на переработку в Финляндии текстиль будет
              переработан на предприятии наших партнеров по самым инновационным
              технологиям без ущерба для окружающей среды. Из него произведут
              волокно для новых тканей или композитных материалов, которые Вы
              также сможете приобрести <Link to="shop">в нашем магазине</Link>.
            </p>
            <p>
              Узнать подробнее о том, как осуществляется переработка на
              предприятии наших финских партнеров, Вы можете <Link>здесь</Link>.
            </p>
          </div>
        </li>
      </ul>
      <BackToTop />
    </div>
  );
};

export default Process;
