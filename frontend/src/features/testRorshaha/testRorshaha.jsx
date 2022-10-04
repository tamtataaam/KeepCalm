import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import style from './testRorshaha.module.scss';
import { testRorshahaImg } from './testRorshahaIMG';

function TestRorshaha() {
  // console.log(testRorshahaImg);
  const [nextQustion, setQuestion] = useState(true);
  // const { id } = useParams();
  return (
    <div>
      <div className={style.main_container}>
        <div className={style.container}>
          {nextQustion ? (
            <>
              <div className={style.img_face_test}>
                <img
                  src="https://testometrika.com/upload/uf/3ce/3cecd2c79d3224c1df1c1bf982778abf.svg"
                  alt="img"
                />
              </div>
              {/* <img src="1Rorshar.jpeg" alt="1 вопрос" /> */}
              <h1 className={style.h1}>
                Чернильные пятна Роршаха: все ли в порядке с вашей психикой?
              </h1>
              <button
                type="button"
                onClick={() => setQuestion(!nextQustion)}
                className={style.button}
              >
                Пройти тест
              </button>
            </>
          ) : (
            <div>
              {testRorshahaImg.map((el) => (
                <img src={el.img} alt="изображение 1" />
              ))}
              <button
                type="button"
                onClick={() => setQuestion(!nextQustion)}
                className={style.button}
              >
                Следующий вопрос
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TestRorshaha;
