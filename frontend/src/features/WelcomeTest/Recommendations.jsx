import React from 'react';
// import { useSelector } from 'react-redux';

function Recommendations() {
  // const navigate = useNavigate();
  // const { recommendations } = useSelector((store) => store.welcomeTest);
  // const userId = useSelector((store) => store.user.data.id);
  // const { conditions } = useSelector((store) => store.welcomeTest);
  // console.log(conditions);
  return (
    <div>
      <h1>nooooooo</h1>

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
