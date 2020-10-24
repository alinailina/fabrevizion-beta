import React from "react";

// Styles
import styles from "./index.module.scss";

const Form = () => {
  return (
    <div className={styles.form}>
      <p>
        Будьте в курсе последних новостей и событий, подпишитесь на нашу
        рассылку:
      </p>
      <form>
        <label>
          <input type="email" />
          <p>Адрес вашей электронной почты</p>
        </label>
        <input type="submit" value="Подписаться" />
      </form>
    </div>
  );
};

export default Form;
