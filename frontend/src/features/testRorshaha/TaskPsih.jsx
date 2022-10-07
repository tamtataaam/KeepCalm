import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './testRorshaha.module.scss';

function TaskPsih() {
  const navigate = useNavigate();
  return (
    // <div className={style.main_container}>
    <div className={style.container}>
      <h1 className={style.h1}>Ваши данные будут переданы специалисту</h1>
      <button
        className={style.button}
        onClick={() => navigate('/exercises')}
        type="button"
      >
        Вернуться к упражнениям
      </button>
    </div>
    // </div>
  );
}
export default TaskPsih;
