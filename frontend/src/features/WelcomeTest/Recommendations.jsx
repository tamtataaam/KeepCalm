/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadLastConditionAsync } from '../../store/welcomeTestSlice/welcomeTestSlice';
import LoadingPage from '../LoadingPage/LoadingPage';
import RecommendationOne from './RecommendationOne';
import style from './WelcomeTest.module.scss';

function Recommendations() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLastConditionAsync());
  }, []);

  const { lastCondition, recommendations } = useSelector(
    (state) => state.welcomeTest
  );

  return (
    <div className={style.main_container}>
      <div>
        {!lastCondition ? (
          <LoadingPage />
        ) : (
          <div className={style.container}>
            <h1 className={style.h1}>Ваш последний результат</h1>
            <h2>{lastCondition.condition}</h2>
            {recommendations.map((recommendation) => (
              <RecommendationOne recommendation={recommendation} key={recommendation.id} />
            ))}
            <button
              className={style.resBnt}
              type="button"
              onClick={() => navigate('/exercises')}
            >
              Перейти к упражнениям
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Recommendations;
