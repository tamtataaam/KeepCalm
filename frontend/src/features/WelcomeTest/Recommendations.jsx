import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Recommendations() {
  const navigate = useNavigate();
  // const { recommendations } = useSelector((store) => store.welcomeTest);
  // const userId = useSelector((store) => store.user.data.id);
  const { conditions } = useSelector((store) => store.welcomeTest);
  return (
    <div>
      {!conditions ? (
        <div>
          <h1>Чтобы узнать ваше состояние пройдите тест</h1>
          <button type="button" onClick={() => navigate('/welcometest')}>
            Пройти тест
          </button>
          <button type="button" onClick={() => navigate('/exercises')}>
            Перейти к упражнениям
          </button>
        </div>
      ) : (
        <div>
          <h1>Ваш последний результат</h1>
          <h2>{conditions.condition}</h2>
          <button type="button" onClick={() => navigate('/exercises')}>
            Перейти к упражнениям
          </button>
        </div>
      )}

      {/* <div>
        {recommendations.length ? (
          recommendations.map((recommendation) => (
            <div key={recommendation.id}>{recommendation.recommendation}</div>
          ))
        ) : (
          <div>
            <h1>
              Пройдите тест, чтобы получить актуальные вашему состоянию
              рекомендации
            </h1>
            <button type="button" onClick={() => navigate('/welcometest')}>
              Перейти к тесту
            </button>
            <button type="button" onClick={() => navigate('/exercises')}>
              Перейти к упражнениям
            </button>
          </div>
        )}
      </div>{' '} */}
    </div>
  );
}

export default Recommendations;
