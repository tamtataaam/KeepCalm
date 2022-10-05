import React from 'react';
import style from './ErrorPage.module.scss';

function ErrorPage() {
  return (
    <div className={style.container}>
      <div className={style.main_img_div}>
        <h1 className={style.error_number}>404</h1>
        <h3 className={style.error_text}>Страница не найдена</h3>
        <img className={style.main_photo_ellipse} src="Ellipse@48.png" alt="Ellipse-Main" />
        <img className={style.main_photo} src="Group@3x.png" alt="Main" />
      </div>
    </div>
  );
}

export default ErrorPage;
