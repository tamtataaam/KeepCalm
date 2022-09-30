import React from 'react';
import Login from '../Login/Login';
import style from './Main.module.scss';

function Main() {
  return (
    <>
      <div className={style.main_img_div}>
        <h3 className={style.welcome_text}>Добро пожаловать в KeepCalm</h3>
        <img className={style.main_photo_ellipse} src="Ellipse@48.png" alt="Ellipse-Main" />
        <img className={style.main_photo} src="Group@3x.png" alt="Main" />
      </div>
      <div className={style.form_box}>
        <Login />
      </div>
    </>
  );
}
export default Main;
