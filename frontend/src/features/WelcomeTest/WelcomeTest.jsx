/* eslint-disable react/jsx-curly-newline */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { welcomeTestQuestions } from './WelcomeTestQuestions';
import { addScoreAsync, clearlastCondition } from '../../store/welcomeTestSlice/welcomeTestSlice';
import style from './WelcomeTest.module.scss';

function WelcomeTest() {
  const userId = useSelector((store) => store.user.data.id);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(clearlastCondition());
  }, []);

  useEffect(() => {
    // console.log(userId, score);
    setIndex((prev) => prev + 1);
    // console.log(index, '1');
    // console.log(score, '2');
    // console.log(welcomeTestQuestions.length, '3');
    if (index + 1 === welcomeTestQuestions.length) {
      dispatch(addScoreAsync({ userId, score }));
    }
  }, [score]);

  return (
    <div className={style.main_container}>
      <div className={style.container}>
        <h1 className={style.h1} style={index < 23 ? { color: '#EBEAEC' } : { color: '#8E97FD' }}>
          Вопрос:
          {' '}
          {index}
          {' '}
          из 22
        </h1>
        {/* <div className={style.test_description}>
          В этом опроснике содержатся группы утверждений. Внимательно прочитайте
          каждую группу утверждений. Затем определите в каждой группе одно
          утверждение, которое лучше всего соответствует тому, как Вы себя
          чувствовали НА ЭТОЙ НЕДЕЛЕ И СЕГОДНЯ. Выберите утверждение. Прежде, чем
          сделать свой выбор, убедитесь, что Вы прочли все утверждения в каждой
          группе.
        </div> */}

        <div className={style.answers_container}>
          <h2 className={style.h2}>Выбери один из вариантов:</h2>
          {welcomeTestQuestions.length !== index ? (
            <>
              <button className={style.button} type="button" onClick={() => setScore((prev) => prev + 1)}>
                {welcomeTestQuestions[index]['1']}
              </button>
              <button className={style.button} type="button" onClick={() => setScore((prev) => prev + 2)}>
                {welcomeTestQuestions[index]['2']}
              </button>
              <button className={style.button} type="button" onClick={() => setScore((prev) => prev + 3)}>
                {welcomeTestQuestions[index]['3']}
              </button>
              <button className={style.button} type="button" onClick={() => setScore((prev) => prev + 4)}>
                {welcomeTestQuestions[index]['4']}
              </button>
            </>
          ) : (
            <button
              className={style.resBnt}
              type="button"
              onClick={() => navigate('/welcometest/recommendations')
            }
            >
              Узнать рекомендации
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

export default WelcomeTest;
