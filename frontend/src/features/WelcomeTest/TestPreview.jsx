/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './WelcomeTest.module.scss';

function TestPreview() {
  const navigate = useNavigate();

  return (
    <div className={style.main_container}>
      <div className={style.container}>

        <div className={style.test_preview}>
          <h2 className={style.h2}>Пройди тест для определение своего эмоционального состояния</h2>
          <h3 className={style.h3}>
            В данном тесте содержатся группы утверждений. Внимательно прочитайте
            каждую группу утверждений. Затем определите в каждой группе ОДНО
            утверждение, которое лучше всего соответствует тому, как вы себя
            чувствовали НА ЭТОЙ НЕДЕЛЕ И СЕГОДНЯ. Выберите это утверждение. Прежде, чем
            сделать свой выбор, убедитесь, что вы прочли все утверждения в каждой
            группе.
          </h3>
        </div>

        <button
          className={style.resBnt}
          type="button"
          onClick={() => navigate('/welcometest')}
        >
          Пройти тест
        </button>
      </div>
    </div>
  );
}

export default TestPreview;
