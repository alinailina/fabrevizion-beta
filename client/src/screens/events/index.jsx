import React from "react";
import { Link } from "react-router-dom";

// Children
import Header from "../../components/Header";
import Form from "./Form";

// Styles
import styles from "./index.module.scss";

const Events = () => {
  return (
    <div className={styles.container}>
      <Header title="События" />
      <p>Нет предстоящих событий.</p>
      <Form />
      <p>
        * Отправляя форму, я даю свое согласие на обработку персональных данных
        в соответствии с <Link to="/">политикой конфиденциальности сайта</Link>
      </p>
    </div>
  );
};

export default Events;
