import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './testRorshaha.module.scss';

function TaskPsih() {
  const navigate = useNavigate();
  return (
    // <div className={style.main_container}>
    <div className={style.container}>
      <h1>Обязательно обратись к врачу!</h1>
      <button
        className={style.buttonn}
        onClick={() => navigate('/')}
        type="button"
      >
        На главную
      </button>
    </div>
    // </div>
  );
}
export default TaskPsih;
