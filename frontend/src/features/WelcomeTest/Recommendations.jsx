import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  loadLastConditionAsync,
  loadLastRecommendationsAsync,
} from '../../store/welcomeTestSlice/welcomeTestSlice';

function Recommendations() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLastConditionAsync());
    dispatch(loadLastRecommendationsAsync());
  }, []);

  const { lastCondition } = useSelector((state) => state.welcomeTest);
  const { recommendations } = useSelector((state) => state.welcomeTest);
  return (
    <div>
      {!lastCondition ? (
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
          <h2>{lastCondition.condition}</h2>
          {recommendations.map((recommendation) => (
            <div key={recommendation.id}>{recommendation.recommendation}</div>
          ))}
          <button type="button" onClick={() => navigate('/exercises')}>
            Перейти ко всем упражнениям
          </button>
        </div>
      )}
    </div>
  );
}

export default Recommendations;
