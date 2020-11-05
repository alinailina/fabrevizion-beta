import React from 'react'
// Styles
import styles from "./index.module.scss";


const Team = () => {
    return ( 
        <div className={styles.team}>
        <h3>Наша команда</h3>
        <ul>
          <li>
            <img src={require("../../assets/team_photos/team_3.png")} alt="team" />
            <div>
              <p>Елена Туомикоски</p>
              <p>фаундер, вопросы партнерства и сотрудничества </p>
              <a href="mailto:elena@fabrevizion.ru">elena@fabrevizion.ru</a>
            </div>
          </li>
          <li>
            <img src={require("../../assets/team_photos/team_1.png")} alt="team" />{" "}
            <div>
              <p>Ярослав Фарушев</p>
              <p>СEO </p>
              <a href="mailto:yaroslav.farushev@fabrevizion.ru">
                yaroslav.farushev@fabrevizion.ru
              </a>
            </div>
          </li>
          <li>
            <img src={require("../../assets/team_photos/team_2.png")} alt="team" />{" "}
            <div>
              <p> Ксения Попова</p>
              <p>СОО</p>
              <a href="mailto:ksenia.popova@fabrevizion.ru">
              ksenia.popova@fabrevizion.ru
              </a>
            </div>
          </li>
        </ul>
      </div>
     );
}
 
export default Team;