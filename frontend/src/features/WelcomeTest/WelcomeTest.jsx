/* eslint-disable react/jsx-curly-newline */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { welcomeTestQuestions } from './WelcomeTestQuestions';
import { addScoreAsync } from '../../store/welcomeTestSlice/welcomeTestSlice';

function WelcomeTest() {
  const userId = useSelector((store) => store.user.data.id);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setIndex((prev) => prev + 1);
  }, [score]);

  return (
    <div>
      <div>
        В этом опроснике содержатся группы утверждений. Внимательно прочитайте
        каждую группу утверждений. Затем определите в каждой группе одно
        утверждение, которое лучше всего соответствует тому, как Вы себя
        чувствовали НА ЭТОЙ НЕДЕЛЕ И СЕГОДНЯ. Выберите утверждение. Прежде, чем
        сделать свой выбор, убедитесь, что Вы прочли все утверждения в каждой
        группе.
      </div>
      <div>
        <div>Выбери один из вариантов</div>
        {welcomeTestQuestions.length !== index ? (
          <>
            <button type="button" onClick={() => setScore((prev) => prev + 1)}>
              {welcomeTestQuestions[index]['1']}
            </button>
            <button type="button" onClick={() => setScore((prev) => prev + 2)}>
              {welcomeTestQuestions[index]['2']}
            </button>
            <button type="button" onClick={() => setScore((prev) => prev + 3)}>
              {welcomeTestQuestions[index]['3']}
            </button>
            <button type="button" onClick={() => setScore((prev) => prev + 4)}>
              {welcomeTestQuestions[index]['4']}
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() =>
              dispatch(
                addScoreAsync({ userId, score }),
                navigate('/welcometest/recommendations')
              )
            }
          >
            Узнать рекомендации
          </button>
        )}
      </div>
    </div>
  );
}

export default WelcomeTest;
