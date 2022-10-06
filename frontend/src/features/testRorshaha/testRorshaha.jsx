import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import style from './testRorshaha.module.scss';
import { testRorshahaImg } from './testRorshahaIMG';
import TaskPsih from './TaskPsih';
import { addAnswerTestRorshaha } from '../../store/testRorshahaSlice/testRorshahaSlice';

function TestRorshaha() {
  const [startQustion, setQuestion] = useState(true);
  const [nextQuestion, setQuestionNext] = useState(1);
  const dispatch = useDispatch();
  // eslint-disable-next-line max-len
  // const answer = useSelector((prev) => prev.testRorshaha.answer);  вытаскиваем все ответы юзера писал для проверки.
  function testRorshahaSubmit(event) {
    event.preventDefault();
    const answerUser = event.target.answerUser.value;
    dispatch(addAnswerTestRorshaha(answerUser));
    event.target.reset();
  }

  const nextImgDisplay = testRorshahaImg.filter(
    (el) => +el.id === nextQuestion
  );
  const displayRorshahaImg = nextImgDisplay.map((el) => el.img);
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
              <h1 className={style.h1}>Что видите на изображении?</h1>
              <img
                className={style.img_from_test}
                src={displayRorshahaImg}
                alt="изображение 1"
              />
              <form onSubmit={testRorshahaSubmit}>
                <input type="text" name="answerUser" />
                <button
                  type="submit"
                  onClick={() => setQuestionNext((prev) => prev + 1)}
                  className={style.button}
                >
                  Следующий вопрос
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TestRorshaha;
