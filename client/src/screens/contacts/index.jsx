import React from "react";

// Children
import Header from "../../components/Header";
import Form from "./Form";

// Styles
import styles from "./index.module.scss";

const Contact = () => {
  return (
    <div>
      <Header title="Контакты" />
      <div className={styles.container}>
        <section>
          <p>
            <span>Юридический адрес</span>
            ул. Б. Конюшенная, д.4–6‑8/А, пом.37‑Н, № 38 <br />
            191186, Санкт-Петербург
          </p>
          <p>
            <span>Телефон для связи</span>в России{" "}
            <a href="tel:+79117011587">+7 911 701 1587</a>,<br />
            <a href="tel:+79811679714">+7 981-167-97-14</a>
            <br />
            <br />в Финляндии <a href="tel:+358445956565">+358 44 595 6565</a>
          </p>
          <p>
            <span>Адрес электронной почты</span>
            <a href="mailto:info@fabrevizion.ru">info@fabrevizion.ru</a>
          </p>
        </section>
        <section>
          <h3>Или воспользуйтесь нашей формой обратной связи</h3>
          <Form />
        </section>
      </div>
    </div>
  );
};

export default Contact;
