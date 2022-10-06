import React, { useState } from 'react';
import style from './UserRecomendation.module.scss';

function UserRecomendationOne({ recommendation }) {
  const [flag, setFlag] = useState(true);
  return (
    <>
      <div className={style.recomendations_div}>
        <h2
          className={style.title_recomendation_one}
          key={recommendation.id}
        >
          {recommendation.recommendationTitle}

        </h2>
        <div className={style.rec_user_text} style={flag ? {} : { display: 'none' }}>
          {' '}
          {recommendation.recommendationBody.slice(0, 0)}
          {' '}
        </div>
        <button
          type="button"
          className={style.button_more_user}
          onClick={() => setFlag((prev) => !prev)}
        >
          {flag ? 'Показать больше' : 'Скрыть'}
        </button>
      </div>
      <div className={style.rec_text} style={!flag ? {} : { display: 'none' }}>
        {' '}
        {recommendation.recommendationBody}
      </div>
    </>
  );
}
export default UserRecomendationOne;
