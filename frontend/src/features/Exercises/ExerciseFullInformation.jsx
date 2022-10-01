import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { oneExerciseAsyncInfo } from '../../store/exercisesSlice/exerciseSlice';
import style from './Exercises.module.scss';
import LoadingPage from '../LoadingPage/LoadingPage';

function ExerciseFullInformation() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(oneExerciseAsyncInfo(id));
  }, []);

  const oneExerciseInfo = useSelector(
    (store) => store.exercises.oneExerciseInfo
  );

  const navigate = useNavigate();

  return (
    <div className={style.exercise_container_main_for_individual}>
      <div className={style.exercise_container_button_individual}>
        {oneExerciseInfo !== null ? (
          <>
            <div key={id} className={style.exercise_container_individual}>
              <h2>{oneExerciseInfo.title}</h2>
              <img
                className={style.exercise_img_individual}
                src={oneExerciseInfo.imageUrl}
                alt="..."
              />
              <div className={style.diary_discription}>
                {oneExerciseInfo.description}
              </div>
            </div>
            {oneExerciseInfo.id !== 1 ? (
              <button
                type="button"
                onClick={() => {
                  navigate(-1);
                }}
              >
                back to all exercises
              </button>
            ) : (
              <div className={style.diary_buttons}>
                <button
                  type="button"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  back to all exercises
                </button>
                <button
                  type="button"
                  onClick={() => {
                    navigate('/userdiary');
                  }}
                >
                  Go to your Diary
                </button>
              </div>
            )}
          </>
        ) : (
          <LoadingPage />
        )}
      </div>
    </div>
  );
}

export default ExerciseFullInformation;
