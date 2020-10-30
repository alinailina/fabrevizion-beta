import React from "react";
// import { Link } from "react-router-dom";

// Children
import Header from "../../components/Header";
import Infographic from "./Infographic";

// Styles
import styles from "./index.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <Header title="О нас" />
      <Infographic />
      <p>
        Наш проект формирует новый уход полного цикла за использованным
        текстилем и остатками текстильного производства:
      </p>
      <ul>
        <li>
          <span>
            <img
              src={require("../../assets/bullet-point.svg")}
              alt="bullet-point"
            />
          </span>
          <p>
            мы обеспечим правильную современную переработку и утилизацию
            отслужившего текстиля без причинения вреда окружающей среде
          </p>
        </li>
        <li>
          <span>
            <img
              src={require("../../assets/bullet-point.svg")}
              alt="bullet-point"
            />
          </span>
          <p>
            мы предлагаем нашим клиентам альтернативные текстильные материалы и
            готовые изделия из вторичного текстиля
          </p>
        </li>
        <li>
          <span>
            <img
              src={require("../../assets/bullet-point.svg")}
              alt="bullet-point"
            />
          </span>
          <p>
            наши дизайнеры продумают весь жизненный цикл новых изделий так,
            чтобы максимально использовать уже имеющиеся и придать им новые
            качества, и предусмотрят, чтобы все наши продукты годились к
            технологичной переработке в конце жизненного цикла
          </p>
        </li>
        <li>
          <span>
            <img
              src={require("../../assets/bullet-point.svg")}
              alt="bullet-point"
            />
          </span>
          <p>
            используя новейшие технологии, мы экономим огромное количество
            пресной воды и других полезных ресурсов. Волокно из переработанного
            текстиля - это полноценная замена первичному хлопковому волокну
          </p>
        </li>
        <li>
          <span>
            <img
              src={require("../../assets/bullet-point.svg")}
              alt="bullet-point"
            />
          </span>
          <p>
            мы оптимизируем логистику и стараемся перерабатывать отходы там, где
            они образуются, уменьшая углеводородный след нашей деятельности
          </p>
        </li>

        <li>
          <span>
            <img
              src={require("../../assets/bullet-point.svg")}
              alt="bullet-point"
            />
          </span>
          <p>
            мы поможем нашим партнерам и клиентам придерживаться концепции «Ноль
            отходов»
          </p>
        </li>
        <li>
          <span>
            <img
              src={require("../../assets/bullet-point.svg")}
              alt="bullet-point"
            />
          </span>
          <p>
            вместе с Вами достигнем важного результата - ни грамма текстильных
            органических отходов на полигоны!
          </p>
        </li>
        <li>
          <span>
            <img
              src={require("../../assets/bullet-point.svg")}
              alt="bullet-point"
            />
          </span>
          <p>
            благодаря удачному месторасположению в Санкт-Петербурге, наша
            компания имеет возможность использовать творческий потенциал и сырье
            с российской стороны, и инновационные решения/технологии — с финской
          </p>
        </li>
        <li>
          <span>
            <img
              src={require("../../assets/bullet-point.svg")}
              alt="bullet-point"
            />
          </span>
          <p>
            мы гарантируем нашим клиентам полную прозрачность, высокое качество
            наших изделий и своевременную информационную поддержку
          </p>
        </li>
        <li>
          <span>
            <img
              src={require("../../assets/bullet-point.svg")}
              alt="bullet-point"
            />
          </span>
          <p>
            мы стремимся к рентабельному, взаимовыгодному и честному партнерству
            в бизнесе. Вместе мы сможем достичь устойчивого развития,
            минимизировав наше наше воздействие на окружающую среду в полном
            соответствии с{" "}
            <a
              href="https://eeas.europa.eu/delegations/russia/72386/eugreendeal-%E2%80%94-%D1%80%D0%B0%D0%B4%D0%B8-%D0%BD%D0%B0%D1%88%D0%B5%D0%B3%D0%BE-%D0%B1%D1%83%D0%B4%D1%83%D1%89%D0%B5%D0%B3%D0%BE-%D0%B8-%D0%B1%D1%83%D0%B4%D1%83%D1%89%D0%B5%D0%B3%D0%BE-%D0%BF%D0%BB%D0%B0%D0%BD%D0%B5%D1%82%D1%8B_ru"
              target="_blank"
              rel="noopener noreferrer"
            >
              Европейским зеленым курсом
            </a>
          </p>
        </li>
      </ul>
      <div>
        <h3>Наша команда:</h3>
        <ul>
          <li>
            {" "}
            <img src={require("../../assets/team_photos/2.jpg")} />{" "}
            <p>
              Елена Туомикоски, фаундер. Вопросы партнерства и сотрудничества,
              <a href="mailto:elena@fabrevizion.ru">elena@fabrevizion.ru</a>
            </p>
          </li>
          <li>
            <img src={require("../../assets/team_photos/1.jpg")} />{" "}
            <p>
              Ярослав Фарушев, СEO,{" "}
              <a href="mailto:yaroslav.farushev@fabrevizion.ru">
                yaroslav.farushev@fabrevizion.ru
              </a>
            </p>
          </li>
          <li>
            {" "}
            <img src={require("../../assets/team_photos/3.jpg")} />{" "}
            <p>
              Ксения Попова, СОО,{" "}
              <a href="mailto:ksenia.popova@favrevizion.ru">
                elena@fabrevizion.ru
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
