/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addSmiley } from '../../store/moodSlice/moodSlice';
import LoadingPage from '../LoadingPage/LoadingPage';
import './mood.css';

function Mood() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const userIdmoodId = useSelector((prev) => prev.mood);
  // console.log(userIdmoodId);
  const moodSm = useSelector((prev) => prev.mood.moodSmiley);

  const getSmiley = (id) => {
    dispatch(addSmiley(Number(id)));
    return navigate('/welcometest');
  };
  // useEffect(() => {
  //   dispatch(loadSmiley());
  // }, []);

  return (
    <div className="mood_container">
      {moodSm ? (
        <>
          <h1 className="mood_h1">Какое у тебя сейчас настроение?</h1>
          <h2 className="mood_h2">Выбери свое настроение на сегодня</h2>
          <div className="smile_container">
            {moodSm.map((el) => (
              <div onClick={() => getSmiley(el.id)}>
                <img className="smile_img" src={el.moodUrl} alt="smile" />
              </div>
            ))}
          </div>
          <div className="button_box">
            {' '}
            <button
              className="mood_btn1"
              type="button"
              onClick={() => navigate('/exercises')}
            >
              Пропустить и перейти на упражения
            </button>
            <button
              className="mood_btn2"
              type="button"
              onClick={() => navigate('/welcometest')}
            >
              Перейти на тест
            </button>
          </div>
        </>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}
export default Mood;
