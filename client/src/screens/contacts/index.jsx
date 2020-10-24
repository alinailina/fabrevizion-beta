import React from "react";

// Children
import Header from "../../components/Header";
import Form from "./Form";

// Styles
import styles from "./index.module.scss";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Header title="Контакты" />
      <section>
        <p>
          <span>Юридический адрес</span>
          191186, Санкт-Петербург, ул.Б. Конюшенная, д.4–6‑8/А, пом.37‑Н, № 38
        </p>
        <p>
          <span>Телефон для связи</span>
          в России +7 965 753 8688 <br />в Финляндии{" "}
          <a href="tel:+358445956565">+358 44 595 6565</a>
        </p>{" "}
        <p>
          <span>Адрес электронной почты</span>
          <a href="mailto:info@fabrevizion.ru">info@fabrevizion.ru</a>
        </p>
      </section>
      <section>
        <h3>Или воспользуйтесь нашей формой обратной связи:</h3>
        <Form />
      </section>
    </div>
  );
};

export default Contact;
