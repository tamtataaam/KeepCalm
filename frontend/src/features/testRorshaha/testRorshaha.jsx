import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import style from './testRorshaha.module.scss';
import { testRorshahaImg } from './testRorshahaIMG';
import TaskPsih from './TaskPsih';

function TestRorshaha() {
  const [startQustion, setQuestion] = useState(true);
  const [nextQuestion, setQuestionNext] = useState(1);

  const nextImgDisplay = testRorshahaImg.filter(
    (el) => +el.id === nextQuestion
  );
  const displayRorshahaImg = nextImgDisplay.map((el) => el.img);
  console.log(displayRorshahaImg);
  if (!displayRorshahaImg.length) {
    return (
      <div>
        <TaskPsih />
      </div>
    );
  }
  return (
    <div>
      <div className={style.main_container}>
        <div className={style.container}>
          {startQustion ? (
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
                onClick={() => setQuestion(!startQustion)}
                className={style.button}
              >
                Пройти тест
              </button>
            </>
          ) : (
            <div>
              <img src={displayRorshahaImg} alt="изображение 1" />

              <input type="text" />
              <button
                type="button"
                onClick={() => setQuestionNext((prev) => prev + 1)}
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
