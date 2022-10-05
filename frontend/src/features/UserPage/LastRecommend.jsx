import React from 'react';
import { useSelector } from 'react-redux';

function LastRecommend() {
  const { recommendations } = useSelector((store) => store.welcomeTest);

  return (
    <div>
      {recommendations ? (
        recommendations.map((el) => <div key={el.id}>{el.recommendationTitle}</div>)
      ) : (
        null
      )}
    </div>
  );
}

export default LastRecommend;
