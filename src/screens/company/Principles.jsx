import React from "react";
//import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import Header from "../../components/Header";

const Principles = () => {
  return (
    <div className={styles.principles}>
      <Header title="Наши принципы " />
      <p>
        Цель проекта <span className={styles.name}>FABREVIZION</span> &mdash;
        чтобы наши клиенты, связанные с производством и эксплуатацией
        текстильной продукции, получили инновационные экологичные решения по
        уходу за использованным текстилем и остатками текстильного производства.
      </p>
      <p>
        Вместе с партнерами и клиентами мы создаем экономику замкнутого цикла,
        где есть все необходимое, но нет ничего лишнего, при этом человеческая
        деятельность находится в гармоничном взаимодействии с природой, без
        жестокой эксплуатации природных ресурсов и людей.
      </p>
      <p>
        Вместе мы выстраиваем новые бизнес-процессы, направленные на уменьшение
        экологического ущерба и обеспечение процветания для всех при
        положительном экономическом росте. Мы стремимся чтобы новые
        бизнес-процессы были взаимовыгодными, честными и надёжными.
      </p>
      <p>
        Мы видим нашими главными задачами достижение следующих{" "}
        <a
          href="https://www.un.org/sustainabledevelopment/ru/about/development-agenda/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Целей Устойчивого Развития
        </a>
        :
      </p>
      <div>
        <div>
          <img src={require("../../assets/цур/6.png")} alt="" />
        </div>
        <div>
          <img src={require("../../assets/цур/8.png")} alt="" />
        </div>
        <div>
          <img src={require("../../assets/цур/9.png")} alt="" />
        </div>
        <div>
          <img src={require("../../assets/цур/12.png")} alt="" />
        </div>
        <div>
          <img src={require("../../assets/цур/15.png")} alt="" />
        </div>
        <div>
          <img src={require("../../assets/цур/17.png")} alt="" />
        </div>
      </div>
      <p>
        Если вы разделяете наши ценности бережного отношения к окружающей среде
        и людям, осознанного развития бизнеса и ответственности за свои слова и
        действия, присоединяйтесь в нашу цепочку взаимодействий, ведь только
        вместе мы сможем спасти Планету!
      </p>
    </div>
  );
};

export default Principles;
