import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './WelcomePage.module.scss';

function WelcomePage() {
  const user = useSelector((store) => store.user.data);
  const navigate = useNavigate();

  return (
    <div className={style.welcome_container}>
      <h1 className={style.h1}>
        Привет,
        {' '}
        {user.name}
        !
      </h1>
      <h1 className={style.h1}>Добро пожаловать в KeepCalm</h1>
      <h2 className={style.h2}>Ты найдешь здесь спокойствие</h2>

      <div className={style.image_and_btn}>
        <img src="welcome_image.svg" alt="welcome" className={style.welcome_image} />
      </div>
      <button className={style.white_button} type="button" onClick={() => navigate('/mood')}>Начать</button>

    </div>
  );
}

export default WelcomePage;
