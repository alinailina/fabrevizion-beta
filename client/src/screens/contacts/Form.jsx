import React, { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitMessage = async (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    const response = await fetch("/access", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    const resData = await response.json();
    if (resData.status === "success") {
      alert("Message sent");
      this.resetForm();
    } else if (resData.status === "fail") {
      alert("Message failed to send");
    }
  };

  return (
    <form onSubmit={submitMessage}>
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label>
          Имя:
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <p>Представьтесь, пожалуйста</p>
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <p>Адрес вашей электронной почты</p>
        </label>
      </div>

      <label>
        Ваше сообщение:
        <textarea
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
        ></textarea>
        <p>
          Отправляя форму, я даю свое согласие на обработку персональных данных
          в соответствии с{" "}
          <Link to="/">политикой конфиденциальности сайта</Link>
        </p>
      </label>
      <input type="submit" value="Отправить" />
    </form>
  );
};

export default Form;
