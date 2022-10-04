import React from 'react';
import style from './testRorshaha.module.scss';

function testRorshaha() {
  return (
    <div>
      <div className={style.main_container}>
        <div className={style.container}>
          <div className={style.img_face_test}>
            <img src="https://testometrika.com/upload/uf/3ce/3cecd2c79d3224c1df1c1bf982778abf.svg" />
          </div>
          {/* <img src="1Rorshar.jpeg" alt="1 вопрос" /> */}
          <h1 className={style.h1}>
            Чернильные пятна Роршаха: все ли в порядке с вашей психикой?
          </h1>
          <button type="button" className={style.button}>
            Пройти тест
          </button>
        </div>
      </div>
    </div>
  );
}

export default testRorshaha;
