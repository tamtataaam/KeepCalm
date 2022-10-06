import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import style from './testRorshaha.module.scss';
import { testRorshahaImg } from './testRorshahaIMG';
import TaskPsih from './TaskPsih';
import { addAnswerTestRorshaha } from '../../store/testRorshahaSlice/testRorshahaSlice';

function TestRorshaha() {
  // const [startQustion, setQuestion] = useState(true);
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

          <div className={style.testQuest}>
            <h1 className={style.h1}>Что видите на изображении?</h1>
            <img
              className={style.img_from_test}
              src={displayRorshahaImg}
              alt="изображение 1"
            />
            <form onSubmit={testRorshahaSubmit}>
              <input className={style.input} placeholder="Ответ" type="text" name="answerUser" required />
              <button
                type="submit"
                onClick={() => setQuestionNext((prev) => prev + 1)}
                className={style.button}
              >
                Следующий вопрос
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TestRorshaha;
