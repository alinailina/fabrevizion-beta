import React from "react";
import { Link } from "react-router-dom";

// Children
import Header from "../../components/Header";

// Styles
import styles from "./index.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <Header title="О нас" />
      <p>
        Наш пилотный проект формирует новый уход полного цикла за использованным
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
            Мы обеспечим правильную современную утилизацию отслужившего текстиля
            без причинения вреда окружающей среде.
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
            Мы предложим нашим клиентам альтернативные текстильные материалы и
            готовые изделия из вторичного текстиля.
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
            Наши дизайнеры продумают весь жизненный цикл новых изделий так,
            чтобы максимально использовать уже имеющиеся материалы и придать им
            новые качества, и предусмотрят, чтобы все наши продукты годились к
            технологичной переработке в конце жизненного цикла.
          </p>
        </li>
      </ul>

      <p>
        Используя новейшие технологии, мы экономим огромное количество пресной
        воды и других полезных ресурсов. Волокно из переработанного текстиля -
        это полноценная замена первичному хлопковому волокну.
      </p>
      <p>
        * Почему необходима альтернатива первичному хлопковому волокну можно
        прочитать подробнее <Link to="blog">в нашем блоге</Link>.
      </p>
      <p>
        Мы обработаем и переработаем использованный текстиль с применением
        инновационных технологий без ущерба для окружающей среды, чтобы Вы
        получили новые качественные вещи из вашего же сырья.
      </p>
    </div>
  );
};

export default About;