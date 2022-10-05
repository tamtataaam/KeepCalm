import React from 'react';
import style from './ErrorPage.module.scss';

function ErrorPage() {
  return (
    <div className={style.main_img_div}>
      <h1 className={style.welcome_text}>404</h1>
      <h3 className={style.welcome_text}>К сожалению такой страницы не существует</h3>
      <img className={style.main_photo_ellipse} src="Ellipse@48.png" alt="Ellipse-Main" />
      <img className={style.main_photo} src="Group@3x.png" alt="Main" />
    </div>
  );
}

export default ErrorPage;
