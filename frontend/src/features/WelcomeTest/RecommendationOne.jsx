/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import style from './WelcomeTest.module.scss';

function RecommendationOne({ recommendation }) {
  const [flag, setFlag] = useState(true);
  return (
    <div>
      <h2 key={recommendation.id}>{recommendation.recommendationTitle}</h2>
      <div className={style.rec_text} style={flag ? {} : { display: 'none' }}>
        {' '}
        {recommendation.recommendationBody.slice(0, 129)} ...
      </div>
      <div className={style.rec_text} style={!flag ? {} : { display: 'none' }}>
        {' '}
        {recommendation.recommendationBody}
      </div>
      <a
        // type="button"
        className={style.button_more}
        onClick={() => setFlag((prev) => !prev)}
      >
        {flag ? 'Показать больше' : 'Скрыть'}
      </a>
    </div>
  );
}

export default RecommendationOne;
