/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadLastConditionAsync } from '../../store/welcomeTestSlice/welcomeTestSlice';
import LoadingPage from '../LoadingPage/LoadingPage';
import UserRecommendationOne from './UserRecomendationOne';
import style from './UserRecomendation.module.scss';

function LastRecommend() {
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
          <div className={style.container_recomendation_div}>
            <h1 className={style.h1}>Ваш последний результат</h1>
            <h2 className={style.h1}>{lastCondition.condition}</h2>
            {recommendations.map((recommendation) => (
              <UserRecommendationOne recommendation={recommendation} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default LastRecommend;
