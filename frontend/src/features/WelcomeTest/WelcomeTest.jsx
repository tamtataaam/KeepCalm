import React, { useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { welcomeTestQuestions } from './WelcomeTestQuestions';

function WelcomeTest() {
  // const userId = useSelector((store) => store.user.data.id);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex((prev) => prev + 1);
  }, [score]);

  console.log(score, index);

  return (
    <div>
      <div>
        Инструкция. Оцените свое состояние за последние семь дней (включая
        сегодня). Изучите каждый из симптомов и отметьте, насколько сильно он
        вас беспокоил за прошедшую неделю.
      </div>
      <div>
        <div>Выбери один из вариантов</div>
        {welcomeTestQuestions.length !== index ? (
          <>
            <div>{welcomeTestQuestions[index]}</div>

            <button type="button" onClick={() => setScore((prev) => prev + 1)}>
              Совсем не беспокоил
            </button>
            <button type="button" onClick={() => setScore((prev) => prev + 2)}>
              Слегка
            </button>
            <button type="button" onClick={() => setScore((prev) => prev + 3)}>
              Умеренно
            </button>
            <button type="button" onClick={() => setScore((prev) => prev + 4)}>
              Очень сильно
            </button>
          </>
        ) : (
          <button type="button">Узнать рекомендации</button>
        )}
      </div>
    </div>
  );
}

export default WelcomeTest;
